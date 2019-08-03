import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lista : Post[];

  constructor(private servico: PostsService,  private route: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.servico.getPosts().subscribe(post => this.lista = post.reverse());
  }

  deletePost(id){
      Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
      this.servico.deletePost(id).subscribe(res => console.log(res));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  goToEdit(id) {
    this.route.navigate([`editar/${id}`]);
  }

  getByLimit(n){
    this.servico.getPostsbyLimit(n).subscribe(post => this.lista = post);
  }
}
