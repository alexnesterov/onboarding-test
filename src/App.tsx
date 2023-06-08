import { Suspense, lazy } from 'react'

import Illustration from '@/assets/illustration.svg'

const BoardButtons = lazy(() => import('@/components/Boards/BoardButtons'))

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
                <button
                  className="w-full rounded bg-lightGray px-[30px] py-[15px] text-center font-bold"
                  data-board="button-1"
                >
                  Изменить конфигурацию
                </button>
              </div>
              <div className="max-w-[300px] flex-1">
                <button
                  className="w-full rounded bg-grafit px-[30px] py-[15px] text-center font-bold text-white"
                  data-board="button-2"
                >
                  Купить любой диван
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={'Загрузка...'}>
        <BoardButtons />
      </Suspense>
    </>
  )
}

export default App
