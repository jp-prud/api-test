import { sign } from "jsonwebtoken";
import { env } from "../../config/env";
import { InvalidCredentials } from "../../errors/InvalidCredentials";
import { CompanyRepository } from "../../repositories";
import { IUseCase } from "../../types";

interface IInput {
  name: string;
}

interface IOutput {
  accessToken: string;
}

export class SignInUseCase implements IUseCase<IInput, IOutput> {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute({ name }: IInput): Promise<IOutput> {
    const consumer = await this.companyRepository.findByName({
      name,
    });

    if (!consumer) {
      throw new InvalidCredentials();
    }

    // const isPasswordValid = await compare(password, consumer.password!);

    // if (!isPasswordValid) {
    //   throw new InvalidCredentials();
    // }

    const accessToken = sign(
      {
        sub: consumer.id,
        // role: consumer.role,
        // plan: consumer.plan,
      },
      env.jwtSecret!,
      { expiresIn: "7d" }
    );

    return {
      accessToken,
    };
  }
}
