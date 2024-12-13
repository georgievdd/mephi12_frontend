import { RFC } from '@shared/types/component'
import { UnitContainerHeader } from '@shared/ui/UnitContainerHeader/UnitContainerHeader'
import { root } from '../config'
import './styles.scss'

export const Editorial: RFC = () => {
  return (
    <div className='unit-container'>
      <UnitContainerHeader />
      <div className='editorial-navigation shadow'>
        <h3>Навигация по странице</h3>
        <a href='#annotation'>Аннотация</a>
        <a href='#backpack_problem'>Задача о рюкзаке</a>
        <a href='#super_growing_set'>Супервозрастающее множество</a>
        <a href='#satchel_cryptosystem'>Ранцевая криптосистема</a>
        <a href='#satchel_cryptosystem_keygen'>Генерация ключей</a>
        <p className='extra'>- <a href='#satchel_cryptosystem_encrypt' className='extra'>Шифрование</a></p>
        <p className='extra'>- <a href='#satchel_cryptosystem_decrypt' className='extra'>Расшифровка</a></p>
      </div>
      <div className="editorial-content shadow">
        <div id='annotation' className='block'>
          <h3>Аннотация</h3>
          <p>
            Ранцевая криптосистема (Knapsack Cryptosystem) основана на задаче о рюкзаке (subset-sum problem), которая считается вычислительно сложной. Цель такой системы — надёжное шифрование данных, используя свойства трудноразрешимых математических задач.
            Это одна из первых предложенных схем асимметричного шифрования: здесь используются два ключа — публичный (для шифрования) и приватный (для расшифрования). Историческая ценность ранцевой криптосистемы в том, что она задала направление к применению относительно простых математических структур для обеспечения безопасной передачи данных. Основная идея — свести шифрование к поиску подмножества чисел, сумма которых равна заданному значению. Поскольку решение такой задачи сложно, криптосистема устойчива к атакам, основанным на переборе.
          </p>
        </div>
        <div id='backpack_problem' className='block'>
          <h3>Задача о рюкзаке</h3>
          <p>
            Допустим, у нас есть набор чисел A = [a, b, c, d, …] и целевое число X.
            Задача: определить, существует ли подмножество A, сумма которого равна X, и, если да, найти его.
            В общем случае задача о рюкзаке является NP-полной, то есть не имеет известного решения за полиномиальное время. Это означает, что при достаточно большом размере задачи найти решение быстро практически невозможно.
          </p>
        </div>
        <div id='super_growing_set' className='block'>
          <h3>Супервозрастающее множество</h3>
          <p>
            Супервозрастающее (или сверхвозрастающее) множество — это такой набор чисел, в котором каждый элемент больше суммы всех предыдущих. Пример: [2, 3, 7, 15, 31].
            Если множества подобного типа использовать в задаче о рюкзаке, её решение заметно упрощается. Можно применять жадный алгоритм: перебираем элементы с конца к началу и сравниваем текущий элемент с целевым числом X. Если X больше или равен текущему элементу, мы обязаны включить его в подмножество, иначе нужную сумму набрать уже не удастся.
            Рассмотрим пример.
            A = [2, 3, 7, 15, 31, 78], X = 55.
            Проверяем с конца:
            78 {">"} 55, не берём.
            31 {"<"} 55, берём: X = 55 - 31 = 24.
            15 {"<"} 24, берём: X = 24 - 15 = 9.
            7 {"<"} 9, берём: X = 9 - 7 = 2.
            3 {">"} 2, не берём.
            2 ≤ 2, берём: X = 2 - 2 = 0.
            Итог: X достиг 0, подмножество [2, 7, 15, 31] даёт сумму 55. Задача решена жадным образом.
          </p>
        </div>
        <div id='satchel_cryptosystem' className='block'>
          <h3>Ранцевая криптосистема</h3>
          <p>
            Основой ранцевой криптосистемы служит именно задача о рюкзаке. Предположим, у нас есть двоичное сообщение M длины N, которое требуется зашифровать.
          </p>
          <h3 id='satchel_cryptosystem_keygen'><span>- Генерация ключей</span></h3>
          <ol>
            <li>
              <p>Генерируем так называемый «лёгкий» ранец S из N чисел — супервозрастающее множество случайных чисел.</p>
            </li>
            <li>
              <p>Выбираем модуль MOD, больше суммы всех чисел в S. Пусть сумма элементов S = SUM. Можно взять MOD = SUM + 1 (хотя это не строго обязательно).</p>
            </li>
            <li>
              <p>Выбираем число ω, взаимно простое с MOD (НОД(ω, MOD) = 1). Это будет наш секретный множитель.</p>
            </li>
            <li>
              <p>Формируем «тяжёлый» ранец W такой же длины N по формуле: W[i] = (S[i] * ω) mod MOD.</p>
            </li>
          </ol>
          <p>
            Публичный ключ (PK) будет состоять из (W, MOD), а секретный ключ (SK) — из (S, ω).
          </p>
          <h3 id='satchel_cryptosystem_encrypt'><span>- Шифрование</span></h3>
          <p>Чтобы зашифровать сообщение M, вычисляем C = Σ(M[i] * W[i]) — скалярное произведение вектора сообщения на вектор тяжёлого ранца.</p>
          <h3 id='satchel_cryptosystem_decrypt'><span>- Расшифровка</span></h3>
          <ol>
            <li>
              <p>Найдём число ω⁻¹, которое будет обратным к ω по модулю MOD.</p>
            </li>
            <li>
              <p>Преобразуем зашифрованное сообщение: X = C * ω⁻¹ mod MOD.</p>
            </li>
            <li>
              <p>Теперь, используя секретный лёгкий ранец S, решаем задачу о рюкзаке для числа X. Поскольку S — супервозрастающее множество, решаем её жадным методом. Определив подмножество, соответствующее единицам в сообщении, восстанавливаем исходную последовательность битов.</p>
            </li>
          </ol>
          <p>Так мы получаем сообщение M из шифртекста C, используя секретный ключ.</p>
        </div>
      </div>
    </div>
  )
}

Editorial.url = root + '/editorial'