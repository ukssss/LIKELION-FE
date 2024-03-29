import LogIn from './pages/LogIn.jsx';
import Browse from './pages/Browse.jsx';
import EventHandling from './pages/EventHandling.jsx';
import DescriptionListRendering from './pages/DescriptionListRendering.jsx';

class App extends React.Component {
  state = {
    // 사용자가 선언해서 쓰세요.
    headline: 'React Application',
    // isDisabled: false,
    isPaid: true,
    isToggle: false,
    isLoading: !true,
    hasError: null,
  };

  originalHeadline = this.state.headline;
  willUpdateHeadline = 'NEW HEADLINE! 😀';

  handleChangeHeadline = () => {
    if (this.state.isToggle) {
      this.setState({
        isToggle: false,
        headline: this.originalHeadline,
      });
    } else {
      this.setState({
        isToggle: true,
        headline: this.willUpdateHeadline,
      });
    }
  };

  render() {
    const { isLoading, isToggle, isPaid, headline, hasError, likeLionMembers } = this.state;

    if (isLoading) {
      return <div role='alert'>데이터 로딩 중...</div>;
    }

    if (hasError) {
      return <div role='alert'>{hasError.message}</div>;
    }

    return (
      <div className='App'>
        <h1>{headline}</h1>
        <DescriptionListRendering />

        {/* <EventHandling/> */}
        {
          // <button type="button" onClick={this.handleChangeHeadline}>
          //   {isToggle ? '오리지널 헤드라인으로 변경' : '뉴 헤드라인으로 변경'}
          // </button>
        }

        {/* <LogIn /> */}

        {/* {isPaid && <Browse />} */}
      </div>
    );
  }
}

export default App;
