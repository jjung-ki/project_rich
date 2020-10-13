---
marp: true
---

## Available Scripts

해당 프로젝트는 프론트 엔드를 reactjs 로 구성하고 백엔드는 파이썬으로 할까 하는데
바뀔 수도 있음 우선 프론트만 확정이며 프록시 구성하여 백엔드 처리할 예정.

해당 프로젝트를 시작하기전 기본적인 환경 세팅을 하고 시작하기 바랍니다.

### `NVM install`

NVM(Node Version Manager)를 통해 npm  버전 관리를 하는것이 좋습니다. <br />

```
$ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```


### `NVM setting`

```
$ nvm ls
```
확인이 안될경우 사용하는 에디터의 profile 수정. <br />
zshrc 의 경우 .zshrc 수정

```
$ vi ~/.bash_profile
$ vi ~/.zshrc
```
들어가서 아래의 코드 입력
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```
나와서

```
$ source ~/.bash_profile
$ source ~/.zshrc
```
확인 
```
$ nvm ls
```
확인 후 한 후 안정화된 npm 버전 선택해 설치

### `node_modules install`

```
$ npm install
```
**Note : `package.json`이 들어있는 폴더에서 실행한다.**

### `npm start`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Yarn으로 패키지를 관리할때는
```
$ yarn start
```

## Etc

기타 안되는 것들은 구글링


