export const initialState = [
    {
      title: 'Tieu de 1',
      detail: 'Day la ghi chu 1'
    },
    {
        title: 'Tieu de 2',
        detail: 'Day la ghi chu 2'
    },
    {
      title: 'Tieu de 3',
      detail: 'Day la ghi chu 3'
    },
    {
    title: 'Tieu de 4',
    detail: 'Day la ghi chu 4'
    },
    {
      title: 'Tieu de 5',
      detail: 'Day la ghi chu 5'
      },
  ];
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state , {
          title: action.title,
          detail: action.detail,
          }];
    
      case "DELETE_TASK": {
        state.splice(action.index, 1);
        return state;
      }

      case "UPDATE_TASK":
        state[action.index] ={
          title: action.title,
          detail: action.detail,
        }
        return state;
  
      default:
        return state;
    }
  };