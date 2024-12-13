import os
import re
def remove_files_with_pattern(directory, pattern):
    regex = re.compile(pattern)
    for root, dirs, files in os.walk(directory):
        for file in files:
            if regex.search(file):
                file_path = os.path.join(root, file)
                try:
                    os.remove(file_path)
                    print(f'Удален файл: {file_path}')
                except Exception as e:
                    print(f'Ошибка при удалении файла {file_path}: {e}')
clear = lambda: remove_files_with_pattern('./src',  r'.*\.js$')
if __name__ == '__main__':
    clear()