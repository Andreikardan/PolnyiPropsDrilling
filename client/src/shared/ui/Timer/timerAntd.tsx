// import React, { useState, useEffect } from "react";
// import { Button, Typography, Space } from "antd";

// const { Text } = Typography;

// export const timerAntd = () => {
//   const [time, setTime] = useState(15); // Начальное время 15 секунд
//   const [isRunning, setIsRunning] = useState(false);

//   // Автоматический запуск таймера при монтировании
//   useEffect(() => {
//     setIsRunning(true);
//     const interval = setInterval(() => {
//       setTime((prevTime) => {
//         if (prevTime === 0) {
//           setIsRunning(false);
//           clearInterval(interval);
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     // Очистка интервала при размонтировании
//     return () => clearInterval(interval);
//   }, []);

//   // Функция для сброса таймера
//   const resetTimer = () => {
//     setTime(15);
//     setIsRunning(true);
//   };

//   return (
//     <Space direction="vertical" style={{ marginTop: 20 }}>
//       <Text strong>Таймер на 15 секунд:</Text>
//       <Text>Осталось времени: {time} сек.</Text>
//       <Button type="primary" onClick={resetTimer} disabled={isRunning}>
//         Сбросить
//       </Button>
//     </Space>
//   );
// };

