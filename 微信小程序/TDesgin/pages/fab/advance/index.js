Component({
  data: {
    fabButton: {
      icon: 'call',
      openType: 'getPhoneNumber',
    },
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
    getPhoneNumber (e) {
        console.log(e.detail.code)
      }
  }
});
