# 2022.11.29 Git 실습

> 오늘은 기본 개발환경 세팅 및 Git 실습을 진행하였다.

[프론트엔드 스쿨 4기 : TECHIT](https://techit.education/school/kdt-frontend-4th)

[Preparing for Class](https://www.notion.so/Preparing-for-Class-d971131851304df9801e9436a147d058)

# 1교시 09:00 - 09:50

## 환경 구성하기

### 웹 브라우저(Web Browser)

프론트엔드 개발 시 UI 및 기능이 다양한 웹브라우저 환경에서 제대로 작동되고 보여지는지 확인하는 것은 매우 중요합니다.

데스크탑이나 모바일이라는 서로 다른 환경에서 발생하는 차이도 있기때문에 최대한 다양한 웹브라우저에서 확인하는 것을 추천하고 싶습니다.

1. Google Chrome

[Chrome 웹브라우저](https://www.google.co.kr/chrome/?brand=YTUH&gclid=Cj0KCQjwyt-ZBhCNARIsAKH1177WDZyZwSGAqL_PqTZw46q2xpnJ-7uu7sWVcAfltjEPAgIN_fypMpMaAvEbEALw_wcB&gclsrc=aw.ds)

1. Firefox

[Firefox 최신 버전 다운로드](https://www.mozilla.org/ko/firefox/new/)

### 웹 브라우저 확장 프로그램(Extensions)

웹 브라우저는 기본 기능 이외에 외부 개발자가 개발한 Extensions 또는 Add-ons을 자체 스토어나 갤러리에서 제공합니다.

스토어나 갤러리에서 키워드 검색을 통해 원하는 기능을 제공하는 확장 프로그램을 설치하여 사용할 수 있습니다.

참고로 아래 소개하고 있는 확장 프로그램은 Chrome 웹 브라우저를 기준으로 소개하고 있으며 Firefox에서도 비슷하거나 동일한 기능의 확장 프로그램을 다운로드 받아 사용할 수 있습니다.

1. Web Developer

[Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=ko)

1. Headingsmap

[HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=ko)

1. Tota11y

[tota11y for Chrome](https://chrome.google.com/webstore/detail/tota11y-for-chrome/nkghaekndgmonifcpfgjmpfjlhnmflhp?hl=ko)

4. Visbug

[VisBug](https://chrome.google.com/webstore/detail/visbug/cdockenadnadldjbbgcallicgledbeoc?hl=ko)

1. OpenWax

[OpenWAX](https://chrome.google.com/webstore/detail/openwax/bfahpbmaknaeohgdklfbobogpdngngoe?hl=ko)

### 코드 에디터(Code Editor)

텍스트 파일을 작성할 때 메모장을 사용해서 HTML/CSS 및 Javascript 등 다양한 프로그램 코드를 작성할 수도 있습니다. 그러나 개발 생산성 측면에서 메모장은 효율적이지 않습니다.

그래서 강력한 기능을 제공하는 코드 에디터를 사용하는 것이 필요합니다.

코드 에디터의 종류로는 Sublime Text, Atom, Eclipse, Brackets, Web Storm, Visual Studio Code 등 다양한 선택지가 있는데 무료이면서도 강력한 기능을 제공하는 인기있는 에디터 중 하나가 바로 Visual Studio Code입니다.

[Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)

### Visual Studio Code 확장 프로그램

보기(View) 메뉴에서 확장(Extensions)을 선택한 후 원하는 확장 프로그램을 검색하여 설치합니다.

- [Korean Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ko)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [Monokai-Contrast Theme](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-Monokai-Contrast)

## Node.js

Node.js는 브라우저가 아닌 외부에서 명령어 인터페이스(CLI)와 서버 측 스크립트를 작성할 수 있는 무료 오픈 소스 크로스 플랫폼 JavaScript 런타임 환경입니다.

- **JavaScript**
  Node.js는 JavaScript 프로그래밍 언어를 사용합니다.
- **Open Source**
  Node.js는 오픈 소스이며 전 세계 기여자들에 의해 적극적으로 관리됩니다.
- **Everywhere**
  Node.js는 다양한 환경에서 작동하도록 고안되었습니다.

Node.js 인스톨러를 [다운로드](https://nodejs.org/ko/download/) 받아 설치하거나, 멀티 버전 관리를 위한 도구를 설치합니다.

[Node.js](https://nodejs.org/en/)

### Mac OS

Mac용 Node.js 버전 매니저인 [nvm](https://github.com/nvm-sh/nvm)을 설치한 후, 장기 지원 버전(LTS)을 로컬 드라이브에 설치합니다.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

```bash
nvm install --lts
```

### Windows

Windows용 패키지 매니저 [Chocolatey](https://docs.chocolatey.org/en-us/)를 사용해 Node.js 버전 스위처([nvs](https://github.com/jasongin/nvs#windows))를 설치하고 Node.js 장기 지원 버전(LTS)을 로컬 드라이브에 설치합니다. (Chocolatey 설치 → [참고](https://evandde.github.io/chocolatey/))

```bash
choco install nvs
```

```bash
nvs add lts
nvs use lts
```

[https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

---

# 2교시 10:00 - 10:50

## Git / Github

Git은 시간에따른 파일의 변경 사항을 버전 별로 기록 관리하다가 추후 특정 시점의 버전으로 돌아갈 수 있도록 하는 버전 관리 시스템(Version Control System)의 한 종류 입니다.

버전 관리 시스템은 Git 이외에도 Mercurial, Subversion 등이 있습니다.

Git의 장점으로는 저장소를 로컬 환경에서 관리할 수 있다는 점과 빠른 처리속도를 들 수 있습니다.

기존 버전 관리 시스템 중 Subversion의 경우 중앙 집약형 방식(Centralized Version Control)이었지만 Git은 분산형 방식(Distributed Version Control)으로 전체에 영향을 주지 않고 로컬 환경에서 이력을 관리할 수 있다는 점이 가장 큰 차이점이라 할 수 있습니다.

[Downloads](https://git-scm.com/downloads)

Github은 분산 버전 관리 시스템인 Git 저장소의 호스팅을 지원하는 웹 서비스 입니다. 즉 로컬에서 관리하고 있는 변경 이력을 온라인에서도 관리할 수 있도록 제공합니다.

이런 호스팅 서비스를 제공하는 곳은 Github 이외에 Gitlab과 Bitbucket 등이 있습니다.
우리는 앞으로 Github의 호스팅 서비스를 사용하기 위해 Github에 가입을 하도록 하겠습니다.

[GitHub: Where the world builds software](https://github.com/)

[만화로 보는 Git 탄생 이야기](https://joone.net/2022/10/02/47-git/)

---

# 3교시 11:00 - 11:50

## CLI(\***\*Command Line Interface)\*\***

CLI(명령줄 인터페이스)는 디렉토리 생성 및 이동, 복사, 이름 변경, 삭제 등을 미리 약속된 명령어를 사용하여 실행하는 환경입니다.

운영체제는 기본적으로 CLI를 제공하고 있으며 Windows의 경우 CMD(Command Prompt)를 Mac OS나 Ubuntu의 경우 Terminal을 사용하여 명령어를 통해 일련의 작업을 진행할 수 있습니다.

그러나 Windows의 CMD와 Mac OS의 Terminal에서 지원하는 CLI 명령어가 다르기 때문에 각 운영체제 환경에 맞는 명령어를 학습하는 것이 필요합니다.

예를 들어 파일을 삭제할 때 Windows의 CMD에서는 del 명령을 Mac Os의 Terminal에서는 rm 명령을 사용하여야 합니다.
만약 Windows와 Mac OS, Ubuntu에서 동일한 CLI 명령(Unix/Linux 명령어)을 사용하고자 한다면 Windows는 Git bash나 WSL(Windows Subsystem for Linux)을 사용할 수 있습니다.

[WSL 설치](https://learn.microsoft.com/ko-kr/windows/wsl/install)

### CLI 주요 명령어

**1. 현재 작업중인 폴더 확인**

`pwd` : print working directory

            현재 작업중인 폴더의 절대경로가 출력

**2. 폴더 생성**

`mkdir` : Make Directory

`mkdir {디렉토리 이름}`

- `mkdir Frontend`: 현재 폴더에 `Frontend`폴더를 생성

**3. 디렉토리 이동**

`cd` : change Directory

`cd {디렉토리 경로}`

- `cd .` - 현재 디렉토리 (생략 가능)
- `cd ..` - 상위 경로로 한 단계 이동
- `cd ../..` - 상위 경로로 두 단계 이동
- `cd ~/Desktop` - 데스크탑 디렉토리로 바로 이동

**4. 디렉토리 및 파일 목록 출력**

`ls` : List Segments

`ls {디렉토리 경로}{옵션}`

- `ls ~/Frontend/assets` : `Frontend/assets` 폴더의 하위 폴더 목록을 출력
- `ls -l ~/Frontend/assets` : 폴더 목록을 출력할 때 사용 권한, 소유자, 그룹, 크기, 날짜 등 상세 정보를 함께 표시
- `ls -a ~/Frontend/assets` : 폴더 목록을 출력할 때 숨겨진 항목을 포함하여 모든 내용을 출력
- `ls -al ~/Frontend/assets` : 폴더 목록을 출력할 때 숨겨진 항목을 포함하여 사용 권한, 소유자, 그룹, 크기, 날짜 등 상세 정보를 함께 표시

**5. 파일 생성**

`touch` : 빈 파일을 생성할 경우

`echo` : 간단한 내용이 들어있는 파일을 생성할 경우

- `$ touch index.html`: 내용이 없는 빈 `index.html`파일 생성
- `$ echo 'let me = "Frontend Developer"' > js/index.js`

       js 폴더안에  `let me = "Frontend Developer"` 라는 코드가 삽입된  `index.js`파일 생성

**6. 파일 내용 확인하기**

`cat` : Concatenate

- `cat js/index.js` : `index.js`파일의 내용을 화면에 출력
- `cat index.js app.js` : `index.js`파일의 내용으로 `app.js`파일 내용 덮어쓰기

**7. 파일/(비어있지 않은)디렉토리 삭제**

`rm` : Remove

`rm {제거할 파일/디렉토리 이름}`

- `rm index.html` : `index.html`파일 삭제
- `rm -r js` : js폴더 내부 하위 디렉토리까지 모두 삭제
- `$ rm -rf assets` : `assets`폴더 안의 하위 디렉토리까지 모두 삭제하되, 경고를 나타내지 않음

**8. 디렉토리 제거**

`rmdir` : Remove Directory

`rmdir {제거할 디렉토리 이름}`

- `$rmdir js`: `js` 폴더 삭제

**9. 파일/디렉토리 이동 및 이름 변경**

`mv` : Move(이미 존재하는 파일/디렉토리의 경우 이름 변경이 가능)

- `mv index.html views/index.html`: `index.html` 파일을 `views`폴더로 이동
- `mv js/index.js js/app.js` :`js` 폴더에 있는 `index.js` 파일명을 `app.js`로 변경

**10. 파일/디렉토리 복사**

`cp` : Copy

- `cp index.html main.html`:`index.html`파일을 동일한 폴더에 복사한 후 파일명을 `main.html` 로 변경
- `cp index.html views/main.html` :`index.html`파일을 `views` 폴더에 복사한 후 파일명을  `main.html` 로 변경

---

# 4교시 13:00 - 13:50

### Git 최초 설정

Git을 설치하고 나면 Git의 사용 환경을 적절하게 설정해 주어야 합니다. 환경 설정은 한 컴퓨터에서 한 번만 하면 되고 설정한 내용은 Git을 업그레이드해도 유지됩니다.

```bash
# Git 사용자 ID
git config --global user.name "seulbinim"
# Git 사용자 Email
git config --global user.email seulbinim@gmail.com
# Git Default Editor 설정 (Visual Studio Code)
git config --global core.editor "code --wait"

# windows와 Mac OS의 공백문자(줄바꿈) (Carriage return, Lind Feed)
# Windows 환경
git config --global core.autocrlf true
# Mac OS 환경
git config --global core.autocrlf input
```

또한 언제든지 설정 값을 'git config’라는 도구로 확인하고 변경할 수 있습니다.

```bash
# Git Confing 설정 확인하기
# 터미널에서 확인
git config --list
# 기본 에디터에서 확인
git config --global -e
```

### Git 간편안내서

git을 시작하기 위한 간편 안내서를 통해 버전 관리 시스템을 경험해 보도록 하겠습니다.

[git - 간편 안내서](https://rogerdudler.github.io/git-guide/index.ko.html)

Git이 관리하는 저장소의 기본 브랜치가 master일 경우 main으로 변경할 수 있습니다.

```bash
# git init 명령으로 생성된 저장소의 기본 브랜치가 master일 때 main으로 브랜치명을 변경
git branch -m main

# git init 명령으로 Git 저장소를 초기화 시킬 때 브랜치가 main이 되도록 설정
git init -b main

# 로컬 환경에서 git init 명령을 통해 Git 저장소를 초기화하면 기본 브랜치가 main이 되도록 설정
git config --global init.defaultBranch main
```

[git init](https://www.youtube.com/watch?v=RSSk5ItbOl4)

### Git 참고서

1. Git 입문

[누구나 쉽게 이해할 수 있는 Git 입문~버전 관리를 완벽하게 이용해보자~ | Backlog](https://backlog.com/git-tutorial/kr/)

1. Pro Git

[Book](https://git-scm.com/book/ko/v2)

### Git Command

1. `git init` : 저장소 생성

   ```bash
   # 현재 디렉토리를 Git 저장소로 생성
   # .git 폴더(숨김 폴더)가 생성됨
   git init
   ```

2. `git status` : 현재 상태 확인

   ```bash
   git status

   # 변경된 파일명이 빨간색으로 보일 경우 Working Directory 상태
   # 변경된 파일명이 초록색으로 보일 경우 Staging Area 상태
   # nothing to commit, working tree clean의 경우 변경 내용이 없음을 나타냄
   ```

---

# 5교시 14:00 - 14:50

1. `git add` : 파일의 변경 사항을 index(Staging Area)에 추가

   ```bash
   # 특정 파일을 Staging Area에 추가하기
   git add <file>
   # 변경 내용이 있는 모든 파일을 Staging Area에 추가하기
   git add *
   git add .
   ```

2. `git restore <file>` : 작업 내용 취소

   ```bash
   # Working Directory에 변경 내용을 취소할 경우(Tracked File)
   git restore <file>
   # Staging Area에 변경 내용을 Working Directory로 되돌릴 경우
   git restore --staged <file>
   ```

3. `git commit -m`  : 파일의 변경 사항에 대한 이력 생성

   ```bash
   # 마지막 커밋 메시지 수정
   git commit --amend "수정할 커밋 메시지"
   또는
   git commit --amend
   # VS Code에 COMMIT_EDITMSG 창에 수정할 커밋 메시지 입력 후 창 닫기
   ```

4. `git log` : 커밋 이력 확인

   ```bash
   # Log를 한줄, 그래프 형태로 보기
   git log --oneline
   git log --oneline --graph
   ```

5. `git checkout HEAD~` : 과거 커밋 이력 확인

   ````bash
   ```bash
   # 이전 2개의 커밋으로 이동
   git checkout HEAD~2
   # 특정 커밋으로 이동
   git checkout <hash>
   # 마지막 커밋으로 복귀
   git checkout main
   ````

---

# 6교시 15:00 - 15:50

1. `git reset HEAD~` : 이전 상태로 복원(이력 제거)

   ```bash
   # 이전 2개의 커밋으로 돌아가기 (--mixed : default)
   # 커밋 기록은 삭제되지만 Working Directory에 변경 사항은 남김
   git reset HEAD~2
   # 커밋 기록은 삭제되지만 Working Directory와 Staging Area에 변경 사항은 남김
   git reset --soft HEAD~2
   # HEAD~2 커밋으로 복원되며 이후에 변경된 커밋 기록은 모두 삭제
   git reset --hard HEAD~2
   ```

2. `git branch` : 브랜치 생성 및 이동

   ```bash
   # likelion이라는 브랜치를 생성
   git branch likelion
   # likelion이라는 브랜치로 이동
   # checkout 명령이 여러 기능을 가지고 있기때문에 Git 2.23.0 버전에서는
   # 브랜치 이동을 위한 기능으로 switch 명령이 추가 됨 (checkout, switch 모두 사용 가능)
   git checkout likelion
   git switch likelion
   # main 브랜치로 복귀
   git switch main
   # likelion 브랜치를 main 브랜치로 병합
   git merge likelion
   # likelion 브랜치 삭제
   git branch -d likelion
   ```

3. `git reset HEAD~` : 이전 상태로 복원(이력 제거)

   ```bash
   # 이전 2개의 커밋으로 돌아가기 (--mixed : default)
   # 커밋 기록은 삭제되지만 Working Directory에 변경 사항은 남김
   git reset HEAD~2
   # 커밋 기록은 삭제되지만 Working Directory와 Staging Area에 변경 사항은 남김
   git reset --soft HEAD~2
   # HEAD~2 커밋으로 복원되며 이후에 변경된 커밋 기록은 모두 삭제
   git reset --hard HEAD~2
   ```

4. `git remote` : 리모트(Remote) 브랜치

   ```bash
   # 리모트 브랜치 조회
   git remote -v
   # 리모트 브랜치 추가
   git remote add origin <https://github.com/ID/REPOSITORY>
   # 리모트 브랜치 삭제
   git remote remove origin
   git remote rm origin
   ```

5. `git push` : 로컬의 변경 이력을 리모트로 전송

   ```bash
   # 로컬의 main 브랜치의 변경 이력을 리모트 main 브랜치로 보내기
   git push origin main
   ```
