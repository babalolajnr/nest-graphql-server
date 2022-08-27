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
exports.CommentModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const author_model_1 = require("../../authors/models/author.model");
const post_model_1 = require("../../posts/models/post.model");
let CommentModel = class CommentModel {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CommentModel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CommentModel.prototype, "body", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], CommentModel.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CommentModel.prototype, "postId", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_model_1.PostModel),
    __metadata("design:type", post_model_1.PostModel)
], CommentModel.prototype, "post", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CommentModel.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => author_model_1.AuthorModel),
    __metadata("design:type", author_model_1.AuthorModel)
], CommentModel.prototype, "author", void 0);
CommentModel = __decorate([
    (0, graphql_1.ObjectType)()
], CommentModel);
exports.CommentModel = CommentModel;
//# sourceMappingURL=comment.model.js.map