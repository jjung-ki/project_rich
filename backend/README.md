---
marp: true
---

## Backend

사실 백엔드는 뭐로 할지 모르겠으나 우선 해당 크롤링파일을 테스트 하기 위해서 적어 놓음

## Test 방법

먼저 python 환경 구축
python 버전 관리를 위해 `pyenv`를 설치해 관리하는 것이 좋다.

## 환경 세팅 방법

1. `install pyenv`
    ```
    $ brew update
    $ brew install pyenv
    $ pyenv versions
    $ pyenv install --list #설치할 리스트 확인
    ```
    검색후 아나콘다 최신버전 설치해서 진행 <br/>
    아나콘다 버전만 검색하고 싶으면 파이프 이용해서 grep 검색해서 설치

    ```
    $ pyenv install --list |grep anaconda3
    $ pyenv install anaconda3-x.x.x 
    ```

    설치후 Global 설정 및 확인
    ```
    $ pyenv global anaconda3-x.x.x
    $ python -V
    $ pip -V
    ```

## 필요한 패키지 및 드라이버
```
$ pip install selenium
$ brew install jupyter 
```
 ***Note : 크롬 드라이버 검색 해서 브라우저 버전과 맞는 드라이버를 다운로드해 사용할 경로에 가져다 놓기***


 ###일단은 여기까지 적기 힘듬