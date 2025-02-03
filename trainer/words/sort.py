import re

def is_valid_word(word):
    return re.fullmatch(r'^[а-яА-ЯіїєґІЇЄҐ]+$', word) is not None

def process_words(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        words = [line.strip() for line in f.readlines()]
    
    valid_words = []
    seen_words = set()
    
    for word in words:
        if is_valid_word(word) and word not in seen_words:
            valid_words.append(word)
            seen_words.add(word)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("[" + ", ".join(f'"{word}"' for word in valid_words) + "]")
    
    with open(input_file, 'w', encoding='utf-8') as f:
        f.truncate(0)

# Виклик функції
process_words('input.txt', 'output.txt')
