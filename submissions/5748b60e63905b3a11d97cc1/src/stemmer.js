/*
(The MIT License)

Copyright (c) 2014-2015 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict';

/*
 * Define few standard suffix manipulations.
 */
var step2list = {
    'ational': 'ate',
    'tional': 'tion',
    'enci': 'ence',
    'anci': 'ance',
    'izer': 'ize',
    'bli': 'ble',
    'alli': 'al',
    'entli': 'ent',
    'eli': 'e',
    'ousli': 'ous',
    'ization': 'ize',
    'ation': 'ate',
    'ator': 'ate',
    'alism': 'al',
    'iveness': 'ive',
    'fulness': 'ful',
    'ousness': 'ous',
    'aliti': 'al',
    'iviti': 'ive',
    'biliti': 'ble',
    'logi': 'log'
};

var step3list = {
    'icate': 'ic',
    'ative': '',
    'alize': 'al',
    'iciti': 'ic',
    'ical': 'ic',
    'ful': '',
    'ness': ''
};

/*
 * Define few consonant-vowel sequences.
 */

var consonant = '[^aeiou]';
var vowel = '[aeiouy]';
var consonantSequence = '(' + consonant + '[^aeiouy]*)';
var vowelSequence = '(' + vowel + '[aeiou]*)';

var EXPRESSION_MEASURE_GREATER_THAN_0 = new RegExp(
    '^' + consonantSequence + '?' + vowelSequence + consonantSequence
);
var EXPRESSION_MEASURE_EQUAL_TO_1 = new RegExp(
    '^' + consonantSequence + '?' + vowelSequence + consonantSequence +
    vowelSequence + '?$'
);
var EXPRESSION_MEASURE_GREATER_THAN_1 = new RegExp(
    '^' + consonantSequence + '?' + '(' + vowelSequence +
    consonantSequence + '){2,}'
);
var EXPRESSION_VOWEL_IN_STEM = new RegExp(
    '^' + consonantSequence + '?' + vowel
);
var EXPRESSION_CONSONANT_LIKE = new RegExp(
    '^' + consonantSequence + vowel + '[^aeiouwxy]$'
);

/*
 * Define few exception-expressions.
 */

var EXPRESSION_SUFFIX_LL = /ll$/;
var EXPRESSION_SUFFIX_E = /^(.+?)e$/;
var EXPRESSION_SUFFIX_Y = /^(.+?)y$/;
var EXPRESSION_SUFFIX_ION = /^(.+?(s|t))(ion)$/;
var EXPRESSION_SUFFIX_ED_OR_ING = /^(.+?)(ed|ing)$/;
var EXPRESSION_SUFFIX_AT_OR_BL_OR_IZ = /(at|bl|iz)$/;
var EXPRESSION_SUFFIX_EED = /^(.+?)eed$/;
var EXPRESSION_SUFFIX_S = /^.+?[^s]s$/;
var EXPRESSION_SUFFIX_SSES_OR_IES = /^.+?(ss|i)es$/;
var EXPRESSION_SUFFIX_MULTI_CONSONANT_LIKE = /([^aeiouylsz])\1$/;
var EXPRESSION_STEP_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
var EXPRESSION_STEP_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
var EXPRESSION_STEP_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

/*
 * Detect the character code for `y`.
 */

var CHARACTER_CODE_Y = 'y'.charCodeAt(0);

/**
 * Stem `value`.
 *
 * @param {string} value
 * @return {string} - Stem corresponding to `value`.
 */
function stemmer(value) {
    var firstCharacterWasLowerCaseY,
        match;

    /*
     * Exit early.
     */

    if (value.length < 3) {
        return value;
    }

    /*
     * Detect initial `y`, make sure it never
     * matches.
     */

    if (value.charCodeAt(0) === CHARACTER_CODE_Y) {
        firstCharacterWasLowerCaseY = true;
        value = 'Y' + value.substr(1);
    }

    /*
     * Step 1a.
     */

    if (EXPRESSION_SUFFIX_SSES_OR_IES.test(value)) {
        /*
         * Remove last two characters.
         */

        value = value.substr(0, value.length - 2);
    } else if (EXPRESSION_SUFFIX_S.test(value)) {
        /*
         * Remove last character.
         */

        value = value.substr(0, value.length - 1);
    }

    /*
     * Step 1b.
     */

    if (match = EXPRESSION_SUFFIX_EED.exec(value)) {
        if (EXPRESSION_MEASURE_GREATER_THAN_0.test(match[1])) {
            /*
             * Remove last character.
             */

            value = value.substr(0, value.length - 1);
        }
    } else if (
        (match = EXPRESSION_SUFFIX_ED_OR_ING.exec(value)) &&
        EXPRESSION_VOWEL_IN_STEM.test(match[1])
    ) {
        value = match[1];

        if (EXPRESSION_SUFFIX_AT_OR_BL_OR_IZ.test(value)) {
            /*
             * Append `e`.
             */

            value += 'e';
        } else if (
            EXPRESSION_SUFFIX_MULTI_CONSONANT_LIKE.test(value)
        ) {
            /*
             * Remove last character.
             */

            value = value.substr(0, value.length - 1);
        } else if (EXPRESSION_CONSONANT_LIKE.test(value)) {
            /*
             * Append `e`.
             */

            value += 'e';
        }
    }

    /*
     * Step 1c.
     */

    if (
        (match = EXPRESSION_SUFFIX_Y.exec(value)) &&
        EXPRESSION_VOWEL_IN_STEM.test(match[1])
    ) {
        /*
         * Remove suffixing `y` and append `i`.
         */

        value = match[1] + 'i';
    }

    /*
     * Step 2.
     */

    if (
        (match = EXPRESSION_STEP_2.exec(value)) &&
        EXPRESSION_MEASURE_GREATER_THAN_0.test(match[1])
    ) {
        value = match[1] + step2list[match[2]];
    }

    /*
     * Step 3.
     */

    if (
        (match = EXPRESSION_STEP_3.exec(value)) &&
        EXPRESSION_MEASURE_GREATER_THAN_0.test(match[1])
    ) {
        value = match[1] + step3list[match[2]];
    }

    /*
     * Step 4.
     */

    if (match = EXPRESSION_STEP_4.exec(value)) {
        if (EXPRESSION_MEASURE_GREATER_THAN_1.test(match[1])) {
            value = match[1];
        }
    } else if (
        (match = EXPRESSION_SUFFIX_ION.exec(value)) &&
        EXPRESSION_MEASURE_GREATER_THAN_1.test(match[1])
    ) {
        value = match[1];
    }

    /*
     * Step 5.
     */

    if (
        (match = EXPRESSION_SUFFIX_E.exec(value)) &&
        (
            EXPRESSION_MEASURE_GREATER_THAN_1.test(match[1]) ||
            (
                EXPRESSION_MEASURE_EQUAL_TO_1.test(match[1]) &&
                !EXPRESSION_CONSONANT_LIKE.test(match[1])
            )
        )
    ) {
        value = match[1];
    }

    if (
        EXPRESSION_SUFFIX_LL.test(value) &&
        EXPRESSION_MEASURE_GREATER_THAN_1.test(value)
    ) {
        value = value.substr(0, value.length - 1);
    }

    /*
     * Turn initial `Y` back to `y`.
     */

    if (firstCharacterWasLowerCaseY) {
        value = 'y' + value.substr(1);
    }

    return value;
}


/*
 * Expose `stemmer`.
 */

module.exports = stemmer;
