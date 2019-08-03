import { Component, OnInit } from '@angular/core';
import { CreatePost } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  post: CreatePost = {
    id: 0,
    title: '',
    body: ''
  }
  constructor(private servico:PostsService, private router: Router) { }

  ngOnInit() {
  }

  adiconar() {
    if(this.post.title == '' && this.post.body =='' ) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    } else {

      this.servico.createPost(this.post).subscribe(res =>
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      )
      this.router.navigate(['lista']);
    }

  }

}
