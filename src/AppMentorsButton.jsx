import React, { memo, useCallback, useMemo } from "react";
import { useImmer } from "use-immer";

export default function AppMentorsButton() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    updatePerson((person) => {
      person.mentors = person.mentors.filter((m) => m.name !== name);
    });
  }, []);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text="멘토의 이름을 바꾸기" onClick={handleUpdate} />
      <Button text="멘토 추가" onClick={handleAdd} />
      <Button text="멘토 삭제" onClick={handleDelete} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  const result = useMemo(() => calcultateSomething(), []);
  console.log(("Button", text, "re-rendering 😜"));

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {text} {result}
    </button>
  );
});

// 성능개선을 보여주기 위해 계산에 시간이 걸리는 함수를 사용
function calcultateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log("😆");
  }
  return 10;
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
