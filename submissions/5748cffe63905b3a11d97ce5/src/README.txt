Описание решения:
Отфильтрованы слова с апострофами, сразу сжатие до 480 000 слов, потери - менее 1%
Выделены суффиксы и префиксы, при удалении которых есть такое же слово в словаре.
Для этого был вычислен словарь пересекающихся частей слов (полный брутфорс слов наподобии каждого с каждым), и по нему вычислены популярные префиксы, корни и суффиксы.
К сожалению ядро корней пользы не принесло, кроме как для изучения этимологий английского языка). 
Была попытка качественной ручной фильтрации суффиксов и префиксов, из них и ядра можно получать 90% всех слов словаря, но результативность такого подхода оказалась низкой - менее 70% - похожие слова губят эту идею, а нейронная сеть, построенная на этом ядре дает ложные слова, которые с первого взгляда и не отличить от присутствующих в словаре.
Брутфорсом были вычислены суффиксы и префиксы, которые можно удалять (минимальный порог потерь - 75%, средний процент 88%). То есть попадаемость оставшегося словаря 88%.
Были вычислены ещё словари суффиксов-префиксов на 85%-92%, и 95%-97%, но они не позволили сильно сжать словарь.
В процессе обработки слова проверяется есть ли в слове такой суффикс или префикс, и если есть то слово отбрасывается.
К суффиксу и префиксу добавлено по 1 доп. букве для повышения точности, эта буква не отбрасывается.
После фильтрации словаря он уменьшился до ~200 000 слов, что дало хороший результат в совокупности с модулем статистики, но нужно хотя бы 25-30 тысяч тест-кейсов в прогоне, 
тогда софтина даёт > 82%, при меньшем кол-ве результат хуже. Модуль статистики вероятностно отфильтровывает корни, чтобы позволять всем корням давать положительный ответ, не блокируя возможные редкие правильные корни.
Суффиксы, префиксы и словарь упакованы блум фильтром.
Проверка на маску по гласным-согласным, тоже упаковано в блум. 
Добавлен словарь корней(тоже через блум), которые сильно фальшивят после проверок. Эти корни оперделяются блумом как положительные, и очень часто повторяются. Они получены путём прогона большого числа неверных слов, и выделения из них основных корней. Возможно они появились из-за блума, возможно это свойство генератора.


27.05.2016 22:25 UTC


