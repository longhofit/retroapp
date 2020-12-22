export enum ExampleEnum {
  Zero = 0,
  One,
}

export enum Actions {
  ADD_POST_SUCCESS= 'retrospected/posts/add/success',
  DELETE_POST= 'retrospected/posts/delete',
  EDIT_POST= 'retrospected/posts/edit',
  MOVE_POST= 'retrospected/posts/move',
  LIKE_SUCCESS= 'retrospected/posts/like/success',
  ADD_POST_GROUP_SUCCESS= 'retrospected/group/add/success',
  DELETE_POST_GROUP= 'retrospected/group/delete',
  EDIT_POST_GROUP= 'retrospected/group/edit',
  RENAME_SESSION= 'retrospected/session/rename',
  JOIN_SESSION= 'retrospected/session/join',
  LEAVE_SESSION= 'retrospected/session/leave',
  EDIT_OPTIONS= 'retrospected/session/options/edit',
  EDIT_COLUMNS= 'retrospected/session/columns/edit',

  RECEIVE_POST= 'retrospected/posts/receive/add',
  RECEIVE_DELETE_POST= 'retrospected/posts/receive/delete',
  RECEIVE_EDIT_POST= 'retrospected/posts/receive/edit',
  RECEIVE_MOVE_POST= 'retrospected/posts/receive/move',
  RECEIVE_LIKE= 'retrospected/posts/receive/like',
  RECEIVE_POST_GROUP= 'retrospected/group/receive/add',
  RECEIVE_DELETE_POST_GROUP= 'retrospected/group/receive/delete',
  RECEIVE_EDIT_POST_GROUP= 'retrospected/group/receive/edit',
  RECEIVE_BOARD= 'retrospected/posts/receive-all',
  RECEIVE_OPTIONS= 'retrospected/session/options/receive',
  RECEIVE_COLUMNS= 'retrospected/session/columns/receive',
  RECEIVE_CLIENT_LIST= 'retrospected/session/receive/client-list',
  RECEIVE_SESSION_NAME= 'retrospected/session/receive/rename',

};
