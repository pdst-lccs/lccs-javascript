import random

articles = ['the', 'a', 'one', 'some', 'any']
nouns = ['boy', 'girl', 'dog', 'town', 'car']
verbs = ['drove', 'jumped', 'ran', 'walked', 'skipped']
prepositions = ['to', 'from', 'over', 'under', 'on']

sizeOfLists = len(articles)-1

wordIndex = random.randint(0, sizeOfLists)
word1 = articles[wordIndex]

wordIndex = random.randint(0, sizeOfLists)
word2 = nouns[wordIndex]

wordIndex = random.randint(0, sizeOfLists)
word3 = verbs[wordIndex]

wordIndex = random.randint(0, sizeOfLists)
word4 = prepositions[wordIndex]

wordIndex = random.randint(0, sizeOfLists)
word5 = articles[wordIndex]

wordIndex = random.randint(0, sizeOfLists)
word6 = nouns[wordIndex]

sentence = word1+' '+word2+' '+word3+' '+word4+' '+word5+' '+word6
print(sentence)
