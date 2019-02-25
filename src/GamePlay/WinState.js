

const WinState = (win, count) => {
      alert(`Winner Winner. It took ${count} moves`);
      win.setState({clicks: 0,
                     blockGrab: '',
                     parentId: '', 
                     A: ['d', 'c', 'b', 'a'],
                     B: [],
                     C: []  
      })
  }

export default WinState;