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
exports.AuthorModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_model_1 = require("../../posts/models/post.model");
const comment_model_1 = require("../../comments/models/comment.model");
let AuthorModel = class AuthorModel {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], AuthorModel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthorModel.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AuthorModel.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], AuthorModel.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [post_model_1.PostModel]),
    __metadata("design:type", Array)
], AuthorModel.prototype, "posts", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [comment_model_1.CommentModel]),
    __metadata("design:type", Array)
], AuthorModel.prototype, "comments", void 0);
AuthorModel = __decorate([
    (0, graphql_1.ObjectType)()
], AuthorModel);
exports.AuthorModel = AuthorModel;
//# sourceMappingURL=author.model.js.map