import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import ICategory from 'src/app/interfaces/ICategory';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-create-form',
  templateUrl: './category-create-form.component.html',
  styleUrls: ['./category-create-form.component.css'],
})
export class CategoryCreateFormComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<CategoryCreateFormComponent>
  ) {}

  ngOnInit(): void {
    this.configureForm();
  }

  configureForm() {
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  createNewCategory() {
    const formSubmmited: boolean = true;
    const categoryName = this.createForm.get('name')?.value;
    const newCategory: ICategory = {
      name: categoryName,
    };
    this.categoryService.create(newCategory).subscribe();
    this.dialogRef.close(formSubmmited);
  }
}