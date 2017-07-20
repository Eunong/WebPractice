import { Component, OnInit } from '@angular/core';
// OnInit은 컴포넌트 초기화 시에 사용한다는 뜻.

// @Component는 이 클래스들이 contact.component.ts의 컴포넌트 임을 알려줌.
// 즉 여기에 들어있는 애들에게 영향을 미친다.
@Component({
  selector: 'app-contact', // 템플릿에서 컴포넌트를 나타내기 위한 요소명(태그) 의미
  templateUrl: './contact.component.html', // 이 파일과 연결된 template 파일을 지정해주는 것
  styleUrls: ['./contact.component.css'] // 이 파일과 연결된 css 파일 지정
})
export class ContactComponent implements OnInit {

  userName = '';
  setName(name) {
    this.userName = name;
  }

  constructor() { }

  ngOnInit() { // 이 안에 컴포넌트 초기화 시에 하고싶은 일들 넣으면 된다.
  }

}
