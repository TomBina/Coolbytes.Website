import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { UrlFormatter } from "src/app/services/url-formatter";
import { environment } from "../../../environments/environment";
import { BlogPostsService } from "../../services/blogpostservice/blog-posts.service";
import { ImagesService } from "../../services/imagesservice/images.service";
import { SeoService } from "../../services/seoservice/seo.service";

@Component({
    templateUrl: "./blog-post.component.html",
    styleUrls: ["blog-post.component.css"]
})
export class BlogPostComponent implements OnInit, OnDestroy {
    blogPost;
    authorImage: string;
    shareInfo;

    private _blogPostSubscription: any;
    private _onRouteChanges: Subscription;

    constructor(private _blogPostsService: BlogPostsService, private _route: ActivatedRoute,
        private _imagesService: ImagesService,
        private _seoService: SeoService,
        private _urlFormatter: UrlFormatter) { }

    ngOnInit(): void {
        this._onRouteChanges = this._route.params.subscribe(changes => {
            if (this._blogPostSubscription) {
                this._blogPostSubscription.unsubscribe();
            }

            this._blogPostSubscription = this._blogPostsService.getById(changes.id).subscribe(b => this.proccesData(b));
        });
    }

    ngOnDestroy(): void {
        if (this._blogPostSubscription) {
            this._blogPostSubscription.unsubscribe();
        }

        this._onRouteChanges.unsubscribe();
    }

    proccesData(blogPost) {
        this._seoService.setTitle(`${blogPost.subject} - Cool Bytes`);
        this._seoService.setAuthor(`${blogPost.author.firstName} ${blogPost.author.lastName}`);
        this._seoService.setDescription(blogPost.contentIntro);
        window.scrollTo(0, 0);

        this.shareInfo = {
            url: `${environment.appUri}post/${blogPost.id}/${blogPost.subjectUrl}`,
            subject: blogPost.subject
        };

        if (blogPost.relatedLinks) {
            for (const link of blogPost.relatedLinks) {
                link.url = `/post/${link.id}/${link.subjectUrl}`;
            }
        }

        this.authorImage = this._imagesService.getUri(blogPost.author.image.uriPath);
        this.blogPost = blogPost;
    }

    formatPath(category) {
        return this._urlFormatter.format(category);
    }
}