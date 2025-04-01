이 프로젝트는 React, Typescript를 사용하여 만든 To Do List 입니다.<br/>
할 일을 추가, 완료, 삭제할 수 있는 간단한 기능을 제공합니다.<br/>
외부 API 연동, 로컬 스토리지 사용 등 여러가지 기능 구현을 통해
사용자 경험을 최적화하는 데 중점을 두었습니다.<br/>

## 목차

1. 프로젝트 개요
2. 프로젝트 배포 주소 및 설치
3. 폴더 구조
4. 주요 기능
5. 접근성 및 성능 최적화
6. 트러블슈팅

---

## 프로젝트 개요

- 목적 :
  사용자가 할 일을 손쉽게 추가하고 관리할 수 있는 To Do List 페이지 입니다.<br/>
  React를 사용한 컴포넌트 기반 SPA(Single Page Application)로 구현하였습니다.
- 기술스택 : React, Typescript, styled-component
- 환경구성 : React + Typescript + vite, prettier, eslint
- 배포 : vercel

## 프로젝트 배포 주소 및 설치

- 배포 주소 : [To Do List 바로가기](https://todolist-jiinpark.vercel.app/)
- 프로젝트 설치할 경우
  1. 프로젝트를 클론합니다.<br/>
     ` git clone https://github.com/iamjinpark/ToDoList.git`
  2. 프로젝트 디렉토리로 이동합니다.<br/>
     `cd ToDoList`
  3. 필요한 패키지를 설치합니다.<br/>
     ` npm install`
  4. 개발 서버를 실행합니다.<br/>
     `npm run dev`

## 폴더구조

<p align='center'>
<img src='https://github.com/user-attachments/assets/47f18841-402a-4bef-adff-4385b31b5bee' alt='폴더구조'/>
</p>

📁 assets : 아이콘을 객체 파일로 관리<br/>
📁 components : 추가, 목록, 항목 컴포넌트 관리<br/>
📁 layout : 컴포넌트 템플릿 관리<br/>
📁 pages : 최종 컴포넌트 관리 (Todo list)<br/>
📁 styles : 전역 및 각 컴포넌트에 해당하는 스타일 파일 관리<br/>
📁 types : 타입 정의 파일 관리<br/>
📁 utils : 유틸 함수 관리

- 이번 프로젝트는 싱글 페이지로 컴포넌트간의 역할 분리를 위해 템플릿은 layout, 최종 컴포넌트를 pages에 배치시켰습니다.

## 주요 기능

### 1. 외부 API를 통한 초기 데이터 로드

<p align='center'>
<img src='https://github.com/user-attachments/assets/b06bbdbb-a617-4e97-9701-ebf7d5217ee1' alt='외부 API 연동으로 초기 데이터 로드'/>
</p>

- 페이지 로드 시 외부 API를 호출하여 초기 To Do 데이터를 불러옵니다.
- 로컬스토리지에 데이터가 있는 경우 외부 API는 호출하지 않습니다.
- 유틸함수를 활용하여 코드의 재사용성과 가독성을 높였습니다.

```
export const fetchTodos = async (url: string): Promise<TodoProps[]> => {
  try {
    const response = await axios.get<TodoProps[]>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};
```

### 2. 할 일 추가 기능

<p align='center'>
<img src='https://github.com/user-attachments/assets/0c9e283f-008a-4171-8a16-43a26d0b4cc7' alt='할 일 추가 기능'/>
</p>

- 입력창에 할 일을 입력하고 추가 버튼을 클릭하거나 엔터를 치면 새 할 일이 추가됩니다.
- 사용자가 추가한 데이터는 로컬스토리지에 저장됩니다.

<p align='center'>
<img src='https://github.com/user-attachments/assets/39a47f10-a2d4-45e2-acfa-d2b9be2db680' alt='uuid' width='300'/>
</p>

- 데이터 중복과 충돌을 방지하기 위해 UUID를 활용해 고유한 id값을 부여했습니다.

### 3. 할 일 완료 기능

<p align='center'>
<img src='https://github.com/user-attachments/assets/e44533e2-ceb9-48d5-827d-4f99ec9a6dae' alt='할 일 완료 기능'/>
</p>

- 체크박스를 클릭하면 해당 항목의 완료 상태가 토글되며 완료 여부를 나타냅니다.
- 사용자가 완료 처리한 데이터는 로컬스토리지에 저장됩니다.

  - 완료 처리 전 로컬스토리지 값
  <p align='center'>
  <img src='https://github.com/user-attachments/assets/31b6d208-6a59-4efe-8020-0e90c8b19b1a' alt='할 일 완료 처리 전 로컬스토리지' width='400px'/>
  </p>

  - 완료 처리 후 로컬스토리지 값
  <p align='center'>
  <img src='https://github.com/user-attachments/assets/982274a1-5efc-41ff-a1da-bde91cccc608' alt='할 일 완료 처리 전 로컬스토리지' width='400px'/>
  </p>

### 4. 할 일 삭제 기능

<p align='center'>
<img src='https://github.com/user-attachments/assets/ee84b9ab-e7ac-4f97-bd11-adcf7bd5d7bd' alt='할 일 삭제 기능'/>
</p>

- 삭제 버튼을 클릭하면 특정 항목을 삭제할 수 있습니다.
- 삭제된 항목은 로컬스토리지에서도 삭제됩니다.

### 5. 로컬스토리지를 사용한 데이터 저장 및 불러오기 기능

- 위의 기능 설명에서 볼 수 있듯이 모든 추가, 완료, 삭제 데이터는 로컬스토리지에 저장됩니다.
- 로컬스토리지에 todos라는 키값이 있으면, 페이지가 다시 로드될 때 로컬스토리지에 저장된 데이터를 불러옵니다.

<p align='center'>
<img src='https://github.com/user-attachments/assets/c1823867-f35b-4d4c-a163-8febe4b2fbe7' alt='로컬스토리지 저장 기능'/>
</p>

- 할 일을 추가하고 완료로 수정한 뒤 새로고침하면 수정한대로 렌더링 되는 것을 볼 수 있습니다.

<p align='center'>
<img src='https://github.com/user-attachments/assets/7ead80b8-0ee7-4188-aa0f-0c98f814246d' alt='데이터 불러오기 기능'/>
</p>

- 로컬스토리지에 todos라는 키값이 없으면, 외부 API를 통해 초기 데이터를 불러옵니다.

### 6. 기본적인 CSS-in-JS 스타일링 (styled-component)

- 가독성을 높이기 위해 스타일을 객체로 묶고 그룹화하여 사용했습니다.
- 컴포넌트 단위로 파일을 나누어 유지보수에 용이하게 작업했습니다.

## 접근성과 성능 최적화

1. 접근성 개선

```
     <Styled.AddButton type="submit" aria-label="할 일 추가 버튼">
        <icons.actions.add />
      </Styled.AddButton>
```

```
<Styled.RemoveButton
        onClick={() => removeTodo(id)}
        aria-label="할 일 삭제 버튼"
      >
        <icons.actions.delete />
      </Styled.RemoveButton>
```

- 모든 버튼에 aria-label 속성을 추가하여 접근성을 높였습니다.

2. Lighthouse 성능 체크 및 최적화
<p align='center'>
<img src='https://github.com/user-attachments/assets/2fd34e11-d17d-48d3-8b80-acbde07b5f6f' alt='라이트하우스 성능 체크 결과' width='400'/>
</p>

- 코드 스플리팅을 통해 초기 로딩 성능 개선
- 불필요한 리렌더링 방지를 위해 useCallback 사용
- localStorage와 API 관리 로직 최적화
- meta 태그 추가로 검색엔진 최적화

3. 반응형 구현
<p align='center'>
<img src='https://github.com/user-attachments/assets/f55038b1-404b-429e-a73c-5bc0be2d42c9' alt='반응형' />
</p>

## 트러블슈팅

**문제**
로컬 스토리지에 todos 배열이 저장되지만 새로고침할 때마다 빈 배열([])로 초기화되는 문제가 발생했습니다. 이로 인해 로컬 스토리지에 저장된 todos 데이터가 유지되지 않는 에러가 발생했습니다.

**원인**
컴포넌트가 처음 렌더링될 때 loadTodos 함수가 호출되어 로컬 스토리지에서 데이터를 읽어오는 동시에, 새로고침 시 빈 배열([]) 상태가 덮어쓰여지기 때문에 발생했습니다.

**해결**

1. 초기 로드 상태 추가: 로컬 스토리지에 저장된 todos 데이터를 불러온 후에만 로컬 스토리지를 업데이트하도록 하기 위해 isLoaded라는 새로운 상태를 추가했습니다.
2. 조건부 로컬 스토리지 저장: useEffect에서 isLoaded가 true인 경우에만 todos 상태를 로컬 스토리지에 저장하도록 수정했습니다. 이를 통해 초기 로드 시에 todos 상태가 불필요하게 덮어쓰여지는 것을 방지했습니다.
