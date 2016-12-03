#coding:utf-8
"""cj5_to_json.py

轉換倉頡碼表成json格式方便javascript處理。
此程式讀取碼表檔名cj5-origin.txt，轉換成json後將結果寫入cj5-origin.json檔案。
"""

import re, json

pattern = re.compile(r'^(\w*?) (\S)$',
    re.MULTILINE)

def main():
    with open('cj5-origin.txt', 'r') as f_input:
        content = f_input.read()
    result = {}
    for code, word in pattern.findall(content):
        result[word] = code
    with open('cj5-origin.json', 'w') as f_output:
        json.dump(result, f_output)


if __name__ == '__main__':
    main()
