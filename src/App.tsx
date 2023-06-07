import Illustration from '@/assets/illustration.svg'
import { BoardCard } from '@/components/Board'

function App() {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-[908px] px-4 py-12">
          <div>
            <div className="relative pb-[31.392694%]">
              <img
                className="absolute h-full w-full object-cover"
                src={Illustration}
                alt="Иллюстрация"
              />
            </div>
          </div>
          <div className="mt-24">
            <div className="text-center">
              <h1 className="text-5xl font-bold leading-[72px]">
                Добро пожаловать в конструктор!
              </h1>
              <div className="mt-6 text-2xl leading-9">
                Выберите действие для продолжения
              </div>
            </div>
            <div className="mt-16 flex justify-center gap-8">
              <div className="max-w-[300px] flex-1">
                <BoardCard
                  heading="Создай свой дизайн"
                  text="Для этой модели доступно еще 62 варианта обивки и 5 опций"
                  buttonText="Понял принял"
                >
                  <button className="w-full rounded bg-lightGray px-[30px] py-[15px] text-center font-bold">
                    Изменить конфигурацию
                  </button>
                </BoardCard>
              </div>
              <div className="max-w-[300px] flex-1">
                <BoardCard
                  heading="Все и сразу!"
                  text="Купи уже готовый диван и не парься ни с какими конструкторами"
                  buttonText="Спасибо пожалуйста"
                >
                  <button className="w-full rounded bg-grafit px-[30px] py-[15px] text-center font-bold text-white">
                    Купить любой диван
                  </button>
                </BoardCard>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Board /> */}
    </>
  )
}

export default App
