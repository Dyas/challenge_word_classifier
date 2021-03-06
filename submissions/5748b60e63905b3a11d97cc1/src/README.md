# Hola JS Challenge Spring 2016: Word Classifier


## Normalisation of the words

The original English dictionary provided contained 661686, in lower and upper case. In order to minize our Filter size we need to somehow try to reduce the number of english words. The following functions were applied for this:

* Deleting of the "-'s" suffix. We will also delete this suffix in the test function of the solution app.
* Ignoring words with a length less than 2 characters. The amount of valid words with less of 2 charactes is low.
* Extracting the stem of the word. The Porter stemming algorithm is a process for removing the commoner morphological and inflexional endings from words in English.

On addittion to the above functions we also remove duplicates generated by the process itself.
The output of this process is a smaller dictionary, 286623 words of the size of 2.5 MB, the original file is around 6.3 MB with 661686 words.
The downside of this normalisation is that we also need to apply the same functions in the solution application which would take some of our quota already.

## Solution

Bloom filters have a strong space advantage over other data structures for representing sets, such as search trees, tries, hash tables, or simple arrays of the entries. Most of these require storing at least the data items themselves, which can require anywhere from a small number of bits, for small integers, to an arbitrary number of bits, such as for strings. Tries are an exception, since they can share storage between elements with equal prefixes, but considering the case of an English dictionary that contains 661686 words its spatial requirement goes beyond the 64 KB limit (our simulations were around 200 KB) imposed by the Challenge.

A Bloom filter with 1% error and an optimal value of k, on the other hand, requires only about 9.6 bits per element — regardless of the size of the elements. This advantage comes partly from its compactness, inherited from arrays, and partly from its probabilistic nature. If a 1% false positive rate seems too high, each time we add about 4.8 bits per element we decrease it by ten times.

In a nutshell, a low false positive rate means higher spatial storage, and its value would depend on the number of elements we want to map into the filter.
Using the smaller dictionary created in the normalisation process, and empirically, we calculated a false positive rate of 39% which stored in disk is 70217 bytes and, once compressed, 62471 bytes.

## Minimizing the false positives
39% is a really hight rate for false positives. In order to tring to minize this, we collect, when doing the normalisation, the number of consonants and vowels found in the dictionary. For example, the following map show us that there 26072 words in the dictionary that contain 5 consonants and 3 vowels.
```
[
  { consonats: 5, vowels: 3, count: 26072 },
  { consonats: 4, vowels: 3, count: 25436 },
  { consonats: 4, vowels: 2, count: 22309 },
  { consonats: 3, vowels: 2, count: 17142 },
  ...
]
```
Using this information we can consider as "invalid" a word when doing the test if the number of consonants vs vowels does not fit in any of the buckets mapped previously.

## Resources

1. `stemmer.js`: Porter stemming algorithm
2. `clean_dict.js`: Normalisation app for the original English dictionary.
3. `bloom_filter.js`: Bloom Filter data structure.
4. `generate_solution_data.js`: Reads the output of the normalisation process, creates the Bloom Filter and it persists the filter as a compressed binary file.
5. `solution.js`: Minimal solution that expects the filter as a buffer and offers the `test` method for testing whether an input word is english.

## Set up of the solution data

```
> node install
> node clean_dist.js
> node generate_solution_data.js
```

* `clean_dist.js` generates one file, it expects the original dictionary file as `all_words.txt`:
  * `words.txt`: The reduced english dictionary.
  * The consonants and vowels map is logged in the console.

* `generate_solution_data.js` generates two files:
  * `words.bin`: The Bloom Filter byte array stored as a binary file.
  * `data.gz`: The compressed binary file.

The `solution.js` is minified using UglifyJS. The resulting size of `solution_min.js` is 3053 bytes.

## Testing 

```
> mkdir testscases/ ; cd testscases/ ; cat ../list | xargs -n1 -P150 curl -O
> cd ../tests/
> node test.js .. ../testcases
```
