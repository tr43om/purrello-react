import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

type ListType = {
  id: number;
  listName: string;
};

type InitialStateType = Array<{
  id: number;
  listName: string;
}>;

export enum Types {
  Delete = "DELETE_LIST",
  Add = "ADD_LIST",
  Update = "UPDATE_LIST",
}

type ListPayload = {
  [Types.Add]: {
    id: number;
    listName: string;
  };
  [Types.Delete]: {
    id: number;
  };
  [Types.Update]: {
    id: number;
    listName: string;
  };
};

export type ListActions = ActionMap<ListPayload>[keyof ActionMap<ListPayload>]; // что я только что написал...

const initialState = [
  { id: 1, listName: "To Do" },
  { id: 2, listName: "In Progress" },
  { id: 3, listName: "Testing" },
  { id: 4, listName: "Done" },
];

const ListContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<ListActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export const ListReducer = (state: InitialStateType, action: ListActions) => {
  switch (action.type) {
    case Types.Add:
      return [
        ...state,
        {
          listName: action.payload.listName,
          id: action.payload.id,
        },
      ];
    case Types.Delete:
      return [...state.filter((list) => list.id !== action.payload.id)];

    default:
      return state;
  }
};

type ListContextProviderType = {
  children: JSX.Element;
};
export const ListContextProvider = ({ children }: ListContextProviderType) => {
  const [state, dispatch] = useReducer(ListReducer, initialState, () => {
    const localData = localStorage.getItem("lists");
    return localData ? JSON.parse(localData) : [];
  });

  // Local Storage: setting data
  useEffect(() => {
    if (state) {
      localStorage.setItem("lists", JSON.stringify(state));
    }
  }, [state]);

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);
