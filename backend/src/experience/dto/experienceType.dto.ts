import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ExperienceType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  readonly content: string;
  @Field({ nullable: true })
  readonly imageUrl?: string;
  @Field()
  readonly createdBy: string;
  @Field({ nullable: true })
  readonly createdAt?: string;
}