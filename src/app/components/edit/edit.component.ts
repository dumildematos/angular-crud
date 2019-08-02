import { Component, OnInit } from '@angular/core';
import { CreatePost } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import Swal from 'sweetalert2';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  post: CreatePost = {
    id: 0,
    title: '',
    body: ''
  }
  constructor(private servico: PostsService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.post.id =  Number(this.activeRoute.snapshot.paramMap.get("id"));
    this.getPost()
  }

  getPost() {
    this.servico.getPost(this.post.id).subscribe( res => this.post = res);
  }

  updatePost() {
    this.servico.updatePost(this.post.id, this.post).subscribe(res => {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['lista']);
    });
  }

}
