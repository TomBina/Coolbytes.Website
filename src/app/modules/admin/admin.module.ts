import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminAuthorGuardService } from "../../services/admin-author-guard.service";
import { AdminGuardService } from "../../services/admin-guard.service";
import { AuthorsService } from "../../services/authorsservice/authors.service";
import { ResumeEventsService } from "../../services/resumeservice/resume-events.service";
import { SharedModule } from "../shared/shared.module";
import { AuthorComponent } from "./author/author.component";
import { AddBlogComponent } from "./blog/addblog/add-blog.component";
import { BlogListComponent } from "./blog/blog-list.component";
import { PreviewBlogComponent } from "./blog/previewblog/preview-blog.component";
import { UpdateBlogComponent } from "./blog/updateblog/update-blog.component";
import { ImagesManagerComponent } from "./images/images-manager.component";
import { MenuComponent } from "./menu/menu.component";
import { ProcessAuthComponent } from "./processauth/process-auth.component";
import { AddResumeEventComponent } from "./resume/addresumeevent/add-resume-event.component";
import { PreviewResumeEventComponent } from "./resume/previewresumeevent/preview-resume-event.component";
import { ResumeManagerComponent } from "./resume/resume-manager.component";
import { UpdateResumeEventComponent } from "./resume/updateresumeevent/update-resume-event.component";
import { SettingsComponent } from "./settings/settings.component";
import { MaterialModule } from "../material/material.module";
import { CategoriesListComponent } from "./categories/categories-list.component";
import { AddCategoryComponent } from "./categories/add-category.component";
import { UpdateCategoryComponent } from "./categories/update-category.component";

const routes = [
    {
        path: "processauth",
        component: ProcessAuthComponent
    },
    {
        path: "",
        component: BlogListComponent,
        canActivate: [AdminGuardService, AdminAuthorGuardService]
    },
    {
        path: "categories",
        component: CategoriesListComponent,
        canActivate: [AdminGuardService, AdminAuthorGuardService]
    },
    {
        path: "blogs/add",
        component: AddBlogComponent,
        canActivate: [AdminGuardService, AdminAuthorGuardService]
    },
    {
        path: "blogs/:id",
        component: BlogListComponent,
        canActivate: [AdminGuardService, AdminAuthorGuardService]
    },
    {
        path: "blogs",
        component: BlogListComponent,
        canActivate: [AdminGuardService, AdminAuthorGuardService]
    },
    {
        path: "blogs/edit/:id",
        component: UpdateBlogComponent,
        canActivate: [AdminGuardService, AdminAuthorGuardService]
    },
    {
        path: "resume/addevent",
        component: AddResumeEventComponent,
        canActivate: [AdminGuardService, AdminAuthorGuardService]
    },
    {
        path: "resume/event/:id",
        component: UpdateResumeEventComponent,
        canActivate: [AdminGuardService, AdminAuthorGuardService]
    },
    {
        path: "resume",
        component: ResumeManagerComponent,
        canActivate: [AdminGuardService, AdminAuthorGuardService]
    },
    {
        path: "author",
        component: AuthorComponent,
        canActivate: [AdminGuardService]
    },
    {
        path: "settings",
        component: SettingsComponent,
        canActivate: [AdminGuardService]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        MenuComponent,
        ProcessAuthComponent,
        CategoriesListComponent,
        AddCategoryComponent,
        UpdateCategoryComponent,
        BlogListComponent,
        AddBlogComponent,
        UpdateBlogComponent,
        AuthorComponent,
        ImagesManagerComponent,
        PreviewBlogComponent,
        AddResumeEventComponent,
        ResumeManagerComponent,
        PreviewResumeEventComponent,
        UpdateResumeEventComponent,
        SettingsComponent
    ],
    entryComponents: [
        AddCategoryComponent,
        UpdateCategoryComponent
    ],
    providers: [
        AuthorsService,
        AdminGuardService,
        AdminAuthorGuardService,
        ResumeEventsService
    ]
})
export class AdminModule {

}