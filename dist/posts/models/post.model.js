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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const author_model_1 = require("../../authors/models/author.model");
const comment_model_1 = require("../../comments/models/comment.model");
let PostModel = class PostModel {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PostModel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PostModel.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PostModel.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], PostModel.prototype, "votes", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], PostModel.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], PostModel.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => author_model_1.AuthorModel),
    __metadata("design:type", author_model_1.AuthorModel)
], PostModel.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_model_1.CommentModel, { nullable: true }),
    __metadata("design:type", comment_model_1.CommentModel)
], PostModel.prototype, "comment", void 0);
PostModel = __decorate([
    (0, graphql_1.ObjectType)()
], PostModel);
exports.PostModel = PostModel;
//# sourceMappingURL=post.model.js.map