// import { hash } from "bcryptjs";
import { AccountAlreadyExists } from "../../errors";
import { IUseCase } from "../../types";

interface IInput {
  name: string;
}

type IOutput = void;

export class SignUpUseCase implements IUseCase<IInput, IOutput> {
  constructor(private readonly consumerRepository: ConsumerRepository) {}

  async execute({ name }: IInput): Promise<IOutput> {
    const accountAlreadyExists = await this.consumerRepository.findByName({
      where: {
        name,
      },
    });

    if (accountAlreadyExists) {
      throw new AccountAlreadyExists();
    }

    // const hashedPassword = await hash(password, 10);

    await this.consumerRepository.create({
      data: {
        email,
      },
    });
  }
}
