import { likeLionMembers } from '../data/likeLionMembers.js';

class Home extends React.Component {
  state = {
    members: likeLionMembers,
  };

  initialMembers = likeLionMembers;

  // 한 번에 사용하고 싶어
  // 다른 팀원이 읽든 말든 중요한 건 나인 경우
  // #labCount = (() => {
  //   return 11;
  // })();

  // 계산하는 메서드를 정의한 후 그 결과 값을
  // 인스턴스 멤버(변수)에 할당 - 가독성 좋음
  labCount = this.calcLabCount();

  calcLabCount() {
    // 데이터 분석

    // 무엇을 해야 할까?
    // - 105 개의 데이터를 순회해서 lab 의 갯수가 몇 개인지를 확인해야 함
    let labSet = new Set();
    this.state.members.forEach(({ lab }) => labSet.add(lab));

    // 그걸 하려면 어떤 로직을 짜야 하는가
    // - 배열? 아니면 다른 데이터를 분류?

    // 그러면 결과 값은 무엇을 내보내야 하는가
    // - 랩의 갯수

    return labSet.size;
  }

  handleFilterLab = (labNumber) => {
    this.setState({
      members: this.initialMembers.filter((member) => member.lab === labNumber),
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <div role='group' style={{ display: 'flex', gap: 8 }}>
          {Array(this.labCount)
            .fill()
            .map((_, index) => {
              let labIndex = index + 1;
              return (
                <LabButton key={`lab-button-${index}`} onFilter={() => this.handleFilterLab(labIndex)}>
                  LAB {labIndex}
                </LabButton>
              );
            })}
        </div>
        <ul>
          {this.state?.members.map(({ id, lab, name, gender }) => (
            <li key={id}>
              <p>
                <b>{lab}</b>
                <span>{gender?.includes('여성') ? '🙆🏻‍♀️' : '🙆🏻‍♂️'}</span>
                {name}
              </p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

function LabButton(props) {
  return (
    <button type='button' style={{ marginBottom: 20 }} onClick={props.onFilter}>
      {props.children}
    </button>
  );
}

export default Home;
