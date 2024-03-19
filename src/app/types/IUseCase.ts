export interface IUseCase<IInput, IOutput> {
  execute(props: IInput): Promise<IOutput>
}
