/*
  Global reducer is used to manage state that
  impacts the entire app. This maybe be global
  notifications, coupon popups, or email prompts.
  It could also trigger full screen modals, or
  show a pre-loader before rendering the content.
*/
const initialState = {
  isFetching: false,
  shouldPreSync: false,
}

export default function global (state = initialState, action) {
  switch (action.type) {
    default :
      return state
  }
}
