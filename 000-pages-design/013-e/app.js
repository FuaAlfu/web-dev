  const getElement = (selector) => {
      const element = document.querySelector(selector)

      if (element) return element
      throw Error(
          `Please double check your class names, there is no ${selector} class`
      )
  }

  const links = getElement('.nav-links')
  const navBtnDOM = getElement('.nav-btn')

  btnDOM.addEventListener('click', () => {
      title.classList.toggle('show-links')
  })