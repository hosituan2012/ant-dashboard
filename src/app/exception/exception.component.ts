import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.less']
})
export class ExceptionComponent implements OnInit {

  code = 404;
  data = {
    403: {
      image: 'url(/assets/images/403.svg)',
      desc: 'Sorry, you do not have access to this page.',
      backText: 'Back to Home',
      backLink: ['/']
    },
    404: {
      image: 'url(/assets/images/404.svg)',
      desc: 'Sorry, the page you visited does not exist.',
      backText: 'Back to Home',
      backLink: ['/']
    },
    500: {
      image: 'url(/assets/images/500.svg)',
      desc: 'Sorry, Internal Server Error',
      backText: 'Back to Home',
      backLink: ['/']
    }
  };

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.code = parseInt(params.code);
      if (!this.data[this.code]) {
        this.code = 404;
      }
    });
  }

  ngOnInit() {
  }

}
