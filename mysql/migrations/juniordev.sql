-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 04 2022 г., 13:04
-- Версия сервера: 5.7.33-log
-- Версия PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `juniordev`
--

-- --------------------------------------------------------

--
-- Структура таблицы `massage`
--

CREATE TABLE `massage` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `massage`
--

INSERT INTO `massage` (`id`, `user_id`, `text`, `date`) VALUES
(3, 2, 'test test test 111111', '2022-09-02'),
(4, 2, 'test test test 111111', '2022-09-02'),
(5, 2, 'test test test 111111', '2022-09-02'),
(6, 2, 'test test test 111111', '2022-09-02'),
(7, 2, 'test test test 111111', '2022-09-02'),
(8, 2, 'test test test 111111', '2022-09-02'),
(9, 2, 'test test test 111111', '2022-09-02'),
(10, 2, 'test test test 111111', '2022-09-02'),
(11, 2, 'test test test 111111', '2022-09-02'),
(12, 2, 'test test test 111111', '2022-09-02'),
(13, 2, 'TEST MASSEGE', '2022-09-03'),
(14, 2, 'TEST MASSEGE', '2022-09-03'),
(15, 2, 'TEST MASSEGE', '2022-09-03'),
(16, 2, 'history 10', '2022-09-03'),
(17, 2, 'TEST MASSEGE', '2022-09-03'),
(18, 2, 'TEST MASSEGE', '2022-09-03'),
(19, 2, 'TEST MASSEGE', '2022-09-03'),
(20, 2, 'TEST MASSEGE', '2022-09-03'),
(21, 2, 'TEST MASSEGE', '2022-09-03'),
(22, 2, 'TEST MASSEGE', '2022-09-03'),
(23, 2, 'TEST MASSEGE', '2022-09-03');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `name`, `date`, `password`) VALUES
(2, 'user1', '2022-09-02', '12345678'),
(3, 'user2', '2022-09-02', '87654321'),
(4, 'user3', '2022-09-02', '12345678');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `massage`
--
ALTER TABLE `massage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `massage`
--
ALTER TABLE `massage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `massage`
--
ALTER TABLE `massage`
  ADD CONSTRAINT `massage_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
