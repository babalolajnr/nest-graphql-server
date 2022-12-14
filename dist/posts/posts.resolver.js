"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_model_1 = require("./models/post.model");
const posts_service_1 = require("./posts.service");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const create_comment_input_1 = require("../comments/inputs/create-comment.input");
const comments_service_1 = require("../comments/comments.service");
const comment_model_1 = require("../comments/models/comment.model");
const pubSub = new graphql_subscriptions_1.PubSub();
let PostsResolver = class PostsResolver {
    constructor(postsService, commentsService) {
        this.postsService = postsService;
        this.commentsService = commentsService;
    }
    async createPost(title, content, authorId) {
        return await this.postsService.create(title, content, authorId);
    }
    async posts(take, skip) {
        return await this.postsService.findAll(take, skip);
    }
    async addComment(comment) {
        const newComment = await this.commentsService.addComment(comment);
        pubSub.publish('commentAdded', { commentAdded: newComment });
        return newComment;
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => post_model_1.PostModel),
    __param(0, (0, graphql_1.Args)({ name: 'title', type: () => String })),
    __param(1, (0, graphql_1.Args)({ name: 'content', type: () => String })),
    __param(2, (0, graphql_1.Args)({ name: 'authorId', type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "createPost", null);
__decorate([
    (0, graphql_1.Query)(() => [post_model_1.PostModel]),
    __param(0, (0, graphql_1.Args)({ name: 'take', type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)({ name: 'skip', type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "posts", null);
__decorate([
    (0, graphql_1.Mutation)(() => comment_model_1.CommentModel),
    __param(0, (0, graphql_1.Args)('createCommentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_input_1.CreateCommentInput]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "addComment", null);
PostsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        comments_service_1.CommentsService])
], PostsResolver);
exports.PostsResolver = PostsResolver;
//# sourceMappingURL=posts.resolver.js.map