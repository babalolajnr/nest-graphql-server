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
exports.AuthorsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const posts_service_1 = require("../posts/posts.service");
const authors_service_1 = require("./authors.service");
const create_author_input_1 = require("./inputs/create-author.input");
const author_model_1 = require("./models/author.model");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const comment_model_1 = require("../comments/models/comment.model");
const pubSub = new graphql_subscriptions_1.PubSub();
let AuthorsResolver = class AuthorsResolver {
    constructor(authorsService, postsService) {
        this.authorsService = authorsService;
        this.postsService = postsService;
    }
    async author(id) {
        return this.authorsService.findOneById(id);
    }
    async createAuthor(createAuthor) {
        return await this.authorsService.create(createAuthor);
    }
    async authors() {
        return this.authorsService.findAll();
    }
    commentAdded() {
        return pubSub.asyncIterator('commentAdded');
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => author_model_1.AuthorModel),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorsResolver.prototype, "author", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => author_model_1.AuthorModel),
    __param(0, (0, graphql_1.Args)('createAuthorInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_input_1.CreateAuthorInput]),
    __metadata("design:returntype", Promise)
], AuthorsResolver.prototype, "createAuthor", null);
__decorate([
    (0, graphql_1.Query)((returns) => [author_model_1.AuthorModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorsResolver.prototype, "authors", null);
__decorate([
    (0, graphql_1.Subscription)((returns) => comment_model_1.CommentModel),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthorsResolver.prototype, "commentAdded", null);
AuthorsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [authors_service_1.AuthorsService,
        posts_service_1.PostsService])
], AuthorsResolver);
exports.AuthorsResolver = AuthorsResolver;
//# sourceMappingURL=authors.resolver.js.map