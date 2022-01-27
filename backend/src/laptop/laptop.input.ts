import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class LaptopInput {
  @Field()
  readonly brand: string;
  @Field()
  readonly model: string;
  @Field(() => Int)
  readonly price: number;
  @Field()
  readonly size: string;
  @Field()
  readonly specs: string;
  @Field({ nullable: true })
  readonly imageUrl?: string;
}