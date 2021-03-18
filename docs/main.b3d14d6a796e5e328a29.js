/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/@babel/runtime/helpers/arrayLikeToArray.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
      /***/ (module) => {
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        }

        module.exports = _arrayLikeToArray;

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/arrayWithoutHoles.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        var arrayLikeToArray = __webpack_require__(
          /*! ./arrayLikeToArray */ './node_modules/@babel/runtime/helpers/arrayLikeToArray.js'
        );

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return arrayLikeToArray(arr);
        }

        module.exports = _arrayWithoutHoles;

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/defineProperty.js':
      /*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
      /***/ (module) => {
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        module.exports = _defineProperty;

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/iterableToArray.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
      /***/ (module) => {
        function _iterableToArray(iter) {
          if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter))
            return Array.from(iter);
        }

        module.exports = _iterableToArray;

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/nonIterableSpread.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
      /***/ (module) => {
        function _nonIterableSpread() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }

        module.exports = _nonIterableSpread;

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/toConsumableArray.js':
      /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        var arrayWithoutHoles = __webpack_require__(
          /*! ./arrayWithoutHoles */ './node_modules/@babel/runtime/helpers/arrayWithoutHoles.js'
        );

        var iterableToArray = __webpack_require__(
          /*! ./iterableToArray */ './node_modules/@babel/runtime/helpers/iterableToArray.js'
        );

        var unsupportedIterableToArray = __webpack_require__(
          /*! ./unsupportedIterableToArray */ './node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js'
        );

        var nonIterableSpread = __webpack_require__(
          /*! ./nonIterableSpread */ './node_modules/@babel/runtime/helpers/nonIterableSpread.js'
        );

        function _toConsumableArray(arr) {
          return (
            arrayWithoutHoles(arr) ||
            iterableToArray(arr) ||
            unsupportedIterableToArray(arr) ||
            nonIterableSpread()
          );
        }

        module.exports = _toConsumableArray;

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js':
      /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        var arrayLikeToArray = __webpack_require__(
          /*! ./arrayLikeToArray */ './node_modules/@babel/runtime/helpers/arrayLikeToArray.js'
        );

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return arrayLikeToArray(o, minLen);
        }

        module.exports = _unsupportedIterableToArray;

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./assets/styles/main.scss */ './src/assets/styles/main.scss'
        );
        /* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./js/app */ './src/js/app.js'
        );
        /* harmony import */ var _js_todoListCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./js/todoListCounter */ './src/js/todoListCounter.js'
        );
        /* harmony import */ var _js_darkImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./js/darkImage */ './src/js/darkImage.js'
        );
        /* harmony import */ var _js_darkMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./js/darkMode */ './src/js/darkMode.js'
        );
        /* harmony import */ var _js_todoListActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./js/todoListActions */ './src/js/todoListActions.js'
        );
        /* harmony import */ var _js_todoListFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./js/todoListFilter */ './src/js/todoListFilter.js'
        );

        var runApp = function runApp() {
          var form = document.getElementById('form');
          var formCheck = document.getElementById('formCheck');
          var todoContainer = document.getElementById('todoContainer');
          var filteringOptions = document.getElementById('filteringOptions');
          var btnClear = document.querySelector('.clear__link');
          var darkModeIcon = document.getElementById('darkModeIcon');
          window.addEventListener('DOMContentLoaded', function () {
            (0, _js_app__WEBPACK_IMPORTED_MODULE_1__.getTodoList)();
            (0,
            _js_todoListCounter__WEBPACK_IMPORTED_MODULE_2__.getCounterValue)();
            (0,
            _js_darkImage__WEBPACK_IMPORTED_MODULE_3__.getDarkModeIconState)();
            (0, _js_darkMode__WEBPACK_IMPORTED_MODULE_4__.getDarkModeState)();
          });
          form.addEventListener(
            'submit',
            _js_app__WEBPACK_IMPORTED_MODULE_1__.getFormValues
          );
          formCheck.addEventListener('click', function (e) {
            return e.target.classList.toggle('completed');
          });
          todoContainer.addEventListener(
            'click',
            _js_todoListActions__WEBPACK_IMPORTED_MODULE_5__.default
          );
          filteringOptions.addEventListener(
            'click',
            _js_todoListFilter__WEBPACK_IMPORTED_MODULE_6__.default
          );
          btnClear.addEventListener(
            'click',
            _js_app__WEBPACK_IMPORTED_MODULE_1__.deleteTodoItemCompleted
          );
          darkModeIcon.addEventListener(
            'click',
            _js_darkImage__WEBPACK_IMPORTED_MODULE_3__.toggleDarkModeIcon
          );
        };

        runApp();

        /***/
      },

    /***/ './src/js/app.js':
      /*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getFormValues: () => /* binding */ getFormValues,
          /* harmony export */ toggleTodoItemCompleted: () =>
            /* binding */ toggleTodoItemCompleted,
          /* harmony export */ deleteTodoItemCompleted: () =>
            /* binding */ deleteTodoItemCompleted,
          /* harmony export */ deleteTodoItem: () =>
            /* binding */ deleteTodoItem,
          /* harmony export */ saveTodoList: () => /* binding */ saveTodoList,
          /* harmony export */ getTodoList: () => /* binding */ getTodoList,
          /* harmony export */
        });
        /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/helpers/toConsumableArray */ './node_modules/@babel/runtime/helpers/toConsumableArray.js'
        );
        /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js'
        );
        /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _createTodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./createTodoItem */ './src/js/createTodoItem.js'
        );
        /* harmony import */ var _renderTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./renderTodoItem */ './src/js/renderTodoItem.js'
        );
        /* harmony import */ var _clearTodoItemsCompleted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./clearTodoItemsCompleted */ './src/js/clearTodoItemsCompleted.js'
        );
        /* harmony import */ var _resetFormValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./resetFormValues */ './src/js/resetFormValues.js'
        );
        /* harmony import */ var _todoListCounter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./todoListCounter */ './src/js/todoListCounter.js'
        );

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(
                  target,
                  key,
                  source[key]
                );
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        var todoList = [];
        var form = document.getElementById('form');
        var formCheck = document.getElementById('formCheck');

        var getTodoList = function getTodoList() {
          if (localStorage.getItem('todoList')) {
            todoList = JSON.parse(localStorage.getItem('todoList'));
            todoList.map(_renderTodoItem__WEBPACK_IMPORTED_MODULE_3__.default);
          } else {
            todoList = [];
          }
        };

        var saveTodoList = function saveTodoList() {
          localStorage.setItem('todoList', JSON.stringify(todoList));
        };

        var deleteTodoItem = function deleteTodoItem(id) {
          var todoItemId = Number(id);
          todoList = todoList.filter(function (todoItem) {
            return todoItem.id !== todoItemId;
          });
        };

        var deleteTodoItemCompleted = function deleteTodoItemCompleted(e) {
          e.preventDefault();
          todoList.forEach(function (todoItem) {
            var isTodoItemCompleted = todoItem.completed;

            if (isTodoItemCompleted) {
              var id = todoItem.id;
              deleteTodoItem(id);
              saveTodoList();
            }
          });
          (0, _clearTodoItemsCompleted__WEBPACK_IMPORTED_MODULE_4__.default)();
        };

        var toggleTodoItemCompleted = function toggleTodoItemCompleted(id) {
          var todoItemId = Number(id);
          todoList = todoList.map(function (todo) {
            if (todo.id === todoItemId) {
              var newTodoItem = _objectSpread(
                _objectSpread({}, todo),
                {},
                {
                  completed: !todo.completed,
                }
              );

              return newTodoItem;
            }

            return todo;
          });
        };

        var getFormValues = function getFormValues(e) {
          e.preventDefault();
          var inputValue = document.getElementById('todoInput').value;
          var isCheckboxCompleted = formCheck.classList.contains('completed');

          if (inputValue.length > 0) {
            var newTodoItem = (0,
            _createTodoItem__WEBPACK_IMPORTED_MODULE_2__.default)(
              inputValue,
              isCheckboxCompleted
            );
            (0, _renderTodoItem__WEBPACK_IMPORTED_MODULE_3__.default)(
              newTodoItem
            );
            todoList = [].concat(
              _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(
                todoList
              ),
              [newTodoItem]
            );
            saveTodoList();
            (0,
            _todoListCounter__WEBPACK_IMPORTED_MODULE_6__.incrementCounter)();
            (0, _resetFormValues__WEBPACK_IMPORTED_MODULE_5__.default)(
              form,
              formCheck
            );
          }
        };

        /***/
      },

    /***/ './src/js/clearTodoItemsCompleted.js':
      /*!*******************************************!*\
  !*** ./src/js/clearTodoItemsCompleted.js ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _todoListCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./todoListCounter */ './src/js/todoListCounter.js'
        );

        var clearTodoItemsCompleted = function clearTodoItemsCompleted() {
          var todoItems = Array.from(document.querySelectorAll('.todo__item'));
          todoItems.forEach(function (todoItem) {
            var isTodoItemCompleted = todoItem.classList.contains('completed');

            if (isTodoItemCompleted) {
              todoItem.remove();
              (0,
              _todoListCounter__WEBPACK_IMPORTED_MODULE_0__.decrementCounter)();
            }
          });
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = clearTodoItemsCompleted;

        /***/
      },

    /***/ './src/js/createTodoItem.js':
      /*!**********************************!*\
  !*** ./src/js/createTodoItem.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var createTodoItem = function createTodoItem(task, completed) {
          return {
            id: Date.now(),
            task: task,
            completed: completed,
          };
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = createTodoItem;

        /***/
      },

    /***/ './src/js/darkImage.js':
      /*!*****************************!*\
  !*** ./src/js/darkImage.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ toggleDarkModeIcon: () =>
            /* binding */ toggleDarkModeIcon,
          /* harmony export */ getDarkModeIconState: () =>
            /* binding */ getDarkModeIconState,
          /* harmony export */
        });
        /* harmony import */ var _assets_images_icon_sun_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../assets/images/icon-sun.svg */ './src/assets/images/icon-sun.svg'
        );
        /* harmony import */ var _assets_images_icon_moon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../assets/images/icon-moon.svg */ './src/assets/images/icon-moon.svg'
        );
        /* harmony import */ var _darkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./darkMode */ './src/js/darkMode.js'
        );

        var getDarkModeIconState = function getDarkModeIconState() {
          var darkModeIcon = document.getElementById('darkModeIcon');
          var darkState = JSON.parse(localStorage.getItem('darkState'));

          if (darkState) {
            darkModeIcon.src =
              _assets_images_icon_moon_svg__WEBPACK_IMPORTED_MODULE_1__.default;
          } else {
            darkModeIcon.src =
              _assets_images_icon_sun_svg__WEBPACK_IMPORTED_MODULE_0__.default;
          }
        };

        var saveDarkModeIconState = function saveDarkModeIconState(state) {
          localStorage.setItem('darkState', JSON.stringify(state));
        };

        var toggleDarkModeIcon = function toggleDarkModeIcon(_ref) {
          var target = _ref.target;
          var currentIcon = target;
          currentIcon.classList.toggle('dark');
          (0, _darkMode__WEBPACK_IMPORTED_MODULE_2__.toggleDarkModeState)();
          var hasDarkMode = currentIcon.classList.contains('dark');

          if (hasDarkMode) {
            currentIcon.src =
              _assets_images_icon_moon_svg__WEBPACK_IMPORTED_MODULE_1__.default;
            saveDarkModeIconState(hasDarkMode);
          } else {
            currentIcon.src =
              _assets_images_icon_sun_svg__WEBPACK_IMPORTED_MODULE_0__.default;
            saveDarkModeIconState(hasDarkMode);
          }
        };

        /***/
      },

    /***/ './src/js/darkMode.js':
      /*!****************************!*\
  !*** ./src/js/darkMode.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ toggleDarkModeState: () =>
            /* binding */ toggleDarkModeState,
          /* harmony export */ getDarkModeState: () =>
            /* binding */ getDarkModeState,
          /* harmony export */
        });
        var _document = document,
          body = _document.body;

        var toggleDarkModeState = function toggleDarkModeState() {
          body.classList.toggle('dark');
        };

        var getDarkModeState = function getDarkModeState() {
          var darkState = JSON.parse(localStorage.getItem('darkState'));

          if (darkState) {
            body.classList.add('dark');
          } else {
            body.classList.remove('dark');
          }
        };

        /***/
      },

    /***/ './src/js/renderTodoItem.js':
      /*!**********************************!*\
  !*** ./src/js/renderTodoItem.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _assets_images_icon_cross_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../assets/images/icon-cross.svg */ './src/assets/images/icon-cross.svg'
        );

        var renderTodoItem = function renderTodoItem(_ref) {
          var id = _ref.id,
            task = _ref.task,
            completed = _ref.completed;
          var todoContainer = document.getElementById('todoContainer');
          var element = document.createElement('div');
          element.innerHTML = '\n  <div class="todo__item '
            .concat(completed ? 'completed' : '', ' " id="')
            .concat(
              id,
              '">\n\n    <div class="check"></div>\n\n    <p class="todo__text">'
            )
            .concat(task, '</p>\n\n    <img src="')
            .concat(
              _assets_images_icon_cross_svg__WEBPACK_IMPORTED_MODULE_0__.default,
              '" class="todo__delete" />\n    \n  </div>'
            );
          var todoItem = element.firstElementChild;
          todoContainer.insertAdjacentElement('afterbegin', todoItem);
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = renderTodoItem;

        /***/
      },

    /***/ './src/js/resetFormValues.js':
      /*!***********************************!*\
  !*** ./src/js/resetFormValues.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var resetFormValues = function resetFormValues(form, formCheck) {
          var isCheckboxCompleted = formCheck.classList.contains('completed');

          if (isCheckboxCompleted) {
            formCheck.classList.remove('completed');
          }

          form.reset();
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = resetFormValues;

        /***/
      },

    /***/ './src/js/todoListActions.js':
      /*!***********************************!*\
  !*** ./src/js/todoListActions.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./app */ './src/js/app.js'
        );
        /* harmony import */ var _todoListCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./todoListCounter */ './src/js/todoListCounter.js'
        );

        var clearTodoItem = function clearTodoItem(e) {
          var todoItem = e.target.parentElement;
          var todoItemId = todoItem.getAttribute('id');
          (0, _app__WEBPACK_IMPORTED_MODULE_0__.deleteTodoItem)(todoItemId);
          (0, _app__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)();
          (0, _todoListCounter__WEBPACK_IMPORTED_MODULE_1__.decrementCounter)();
          todoItem.remove();
        };

        var toggleCheckbox = function toggleCheckbox(e) {
          var todoItem = e.target.parentElement;
          var todoItemId = todoItem.getAttribute('id');
          (0, _app__WEBPACK_IMPORTED_MODULE_0__.toggleTodoItemCompleted)(
            todoItemId
          );
          (0, _app__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)();
          todoItem.classList.toggle('completed');
        };

        var todoListActions = function todoListActions(e) {
          var isCheckButton = e.target.classList.contains('check');
          var isDeleteButton = e.target.classList.contains('todo__delete');

          if (isCheckButton) {
            toggleCheckbox(e);
          } else if (isDeleteButton) {
            clearTodoItem(e);
          }
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = todoListActions;

        /***/
      },

    /***/ './src/js/todoListCounter.js':
      /*!***********************************!*\
  !*** ./src/js/todoListCounter.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getCounterValue: () =>
            /* binding */ getCounterValue,
          /* harmony export */ incrementCounter: () =>
            /* binding */ incrementCounter,
          /* harmony export */ decrementCounter: () =>
            /* binding */ decrementCounter,
          /* harmony export */
        });
        var counterContainer = document.getElementById('todoCounter');
        var counter = 0;
        counterContainer.textContent = counter;

        var saveCounterValue = function saveCounterValue() {
          localStorage.setItem('counter', JSON.stringify(counter));
        };

        var getCounterValue = function getCounterValue() {
          if (localStorage.getItem('counter')) {
            counter = JSON.parse(localStorage.getItem('counter'));
            counterContainer.textContent = counter;
          } else {
            counter = 0;
            counterContainer.textContent = counter;
          }
        };

        var incrementCounter = function incrementCounter() {
          counter += 1;
          counterContainer.textContent = counter;
          saveCounterValue();
        };

        var decrementCounter = function decrementCounter() {
          counter -= 1;
          counterContainer.textContent = counter;
          saveCounterValue();
        };

        /***/
      },

    /***/ './src/js/todoListFilter.js':
      /*!**********************************!*\
  !*** ./src/js/todoListFilter.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        var filterForTextContent = function filterForTextContent(
          todoItem,
          textContent
        ) {
          var isTodoItemCompleted = todoItem.classList.contains('completed');

          switch (textContent) {
            case 'Active':
              if (isTodoItemCompleted) {
                todoItem.classList.add('hidden');
              }

              break;

            case 'Completed':
              if (!isTodoItemCompleted) {
                todoItem.classList.add('hidden');
              }

              break;

            default:
              break;
          }
        };

        var todoListFilter = function todoListFilter(e) {
          e.preventDefault();
          var filterName = e.target;
          var todoContainer = document.getElementById('todoContainer');
          var todoItems = Array.from(
            todoContainer.querySelectorAll('.todo__item')
          );
          var optionLinks = Array.from(
            document.querySelectorAll('.filtering-options__link')
          );

          if (!filterName.textContent) {
            return;
          }

          todoItems.map(function (todoItem) {
            todoItem.classList.remove('hidden');
            optionLinks.forEach(function (option) {
              return option.classList.remove('selected');
            });
            filterName.classList.add('selected');
            var textContent = filterName.textContent;
            filterForTextContent(todoItem, textContent);
            return todoItem;
          });
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = todoListFilter;

        /***/
      },

    /***/ './src/assets/images/icon-cross.svg':
      /*!******************************************!*\
  !*** ./src/assets/images/icon-cross.svg ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p +
          'assets/images/icon-cross.6ee81d30b75cab19d6f7314624fcc4d6.svg';

        /***/
      },

    /***/ './src/assets/images/icon-moon.svg':
      /*!*****************************************!*\
  !*** ./src/assets/images/icon-moon.svg ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p +
          'assets/images/icon-moon.6c03114b495d05f4380b3c544d9afe2a.svg';

        /***/
      },

    /***/ './src/assets/images/icon-sun.svg':
      /*!****************************************!*\
  !*** ./src/assets/images/icon-sun.svg ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p +
          'assets/images/icon-sun.910b1f9a23741afc341e95653a51f14f.svg';

        /***/
      },

    /***/ './src/assets/styles/main.scss':
      /*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /******/
  }; // The module cache
  /************************************************************************/
  /******/ /******/ var __webpack_module_cache__ = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ if (__webpack_module_cache__[moduleId]) {
      /******/ return __webpack_module_cache__[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    ); // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } /* webpack/runtime/compat get default export */
  /******/
  /************************************************************************/
  /******/ /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })(); /* webpack/runtime/define property getters */
  /******/
  /******/ /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })(); /* webpack/runtime/global */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === 'object') return globalThis;
      /******/ try {
        /******/ return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/ if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  })(); /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })(); /* webpack/runtime/make namespace object */
  /******/
  /******/ /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })(); /* webpack/runtime/publicPath */
  /******/
  /******/ /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + '';
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName('script');
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    } // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ /******/ /******/ if (!scriptUrl)
      throw new Error('Automatic publicPath is not supported in this browser');
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, '')
      .replace(/\?.*$/, '')
      .replace(/\/[^\/]+$/, '/');
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })(); // startup // Load entry module
  /******/
  /************************************************************************/
  /******/ /******/ /******/ __webpack_require__('./src/index.js');
  /******/ // This entry module used 'exports' so it can't be inlined
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9qcy9jbGVhclRvZG9JdGVtc0NvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9qcy9jcmVhdGVUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9qcy9kYXJrSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvanMvZGFya01vZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvanMvcmVuZGVyVG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvanMvcmVzZXRGb3JtVmFsdWVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2pzL3RvZG9MaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9qcy90b2RvTGlzdENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvanMvdG9kb0xpc3RGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWNyb3NzLnN2ZyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tbW9vbi5zdmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLXN1bi5zdmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJydW5BcHAiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm1DaGVjayIsInRvZG9Db250YWluZXIiLCJmaWx0ZXJpbmdPcHRpb25zIiwiYnRuQ2xlYXIiLCJxdWVyeVNlbGVjdG9yIiwiZGFya01vZGVJY29uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldFRvZG9MaXN0IiwiZ2V0Q291bnRlclZhbHVlIiwiZ2V0RGFya01vZGVJY29uU3RhdGUiLCJnZXREYXJrTW9kZVN0YXRlIiwiZ2V0Rm9ybVZhbHVlcyIsImUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2RvTGlzdEFjdGlvbnMiLCJ0b2RvTGlzdEZpbHRlciIsImRlbGV0ZVRvZG9JdGVtQ29tcGxldGVkIiwidG9nZ2xlRGFya01vZGVJY29uIiwidG9kb0xpc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibWFwIiwicmVuZGVyVG9kb0l0ZW0iLCJzYXZlVG9kb0xpc3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGVsZXRlVG9kb0l0ZW0iLCJpZCIsInRvZG9JdGVtSWQiLCJOdW1iZXIiLCJmaWx0ZXIiLCJ0b2RvSXRlbSIsInByZXZlbnREZWZhdWx0IiwiZm9yRWFjaCIsImlzVG9kb0l0ZW1Db21wbGV0ZWQiLCJjb21wbGV0ZWQiLCJjbGVhclRvZG9JdGVtc0NvbXBsZXRlZCIsInRvZ2dsZVRvZG9JdGVtQ29tcGxldGVkIiwidG9kbyIsIm5ld1RvZG9JdGVtIiwiaW5wdXRWYWx1ZSIsInZhbHVlIiwiaXNDaGVja2JveENvbXBsZXRlZCIsImNvbnRhaW5zIiwibGVuZ3RoIiwiY3JlYXRlVG9kb0l0ZW0iLCJpbmNyZW1lbnRDb3VudGVyIiwicmVzZXRGb3JtVmFsdWVzIiwidG9kb0l0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsImRlY3JlbWVudENvdW50ZXIiLCJ0YXNrIiwiRGF0ZSIsIm5vdyIsImRhcmtTdGF0ZSIsInNyYyIsIm1vb25JY29uIiwic3VuSWNvbiIsInNhdmVEYXJrTW9kZUljb25TdGF0ZSIsInN0YXRlIiwiY3VycmVudEljb24iLCJ0b2dnbGVEYXJrTW9kZVN0YXRlIiwiaGFzRGFya01vZGUiLCJib2R5IiwiYWRkIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkZWxldGVJY29uIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJyZXNldCIsImNsZWFyVG9kb0l0ZW0iLCJwYXJlbnRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwidG9nZ2xlQ2hlY2tib3giLCJpc0NoZWNrQnV0dG9uIiwiaXNEZWxldGVCdXR0b24iLCJjb3VudGVyQ29udGFpbmVyIiwiY291bnRlciIsInRleHRDb250ZW50Iiwic2F2ZUNvdW50ZXJWYWx1ZSIsImZpbHRlckZvclRleHRDb250ZW50IiwiZmlsdGVyTmFtZSIsIm9wdGlvbkxpbmtzIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7OztBQ1ZBLHVCQUF1QixtQkFBTyxDQUFDLHFGQUFvQjs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7OztBQ0pBLHdCQUF3QixtQkFBTyxDQUFDLHVGQUFxQjs7QUFFckQsc0JBQXNCLG1CQUFPLENBQUMsbUZBQW1COztBQUVqRCxpQ0FBaUMsbUJBQU8sQ0FBQyx5R0FBOEI7O0FBRXZFLHdCQUF3QixtQkFBTyxDQUFDLHVGQUFxQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7O0FDWkEsdUJBQXVCLG1CQUFPLENBQUMscUZBQW9COztBQUVuRDtBQUNBO0FBQ0E7QUFD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Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7VUNmQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmIzZDE0ZDZhNzk2ZTVlMzI4YTI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzJztcclxuXHJcbmltcG9ydCB7IGdldFRvZG9MaXN0LCBnZXRGb3JtVmFsdWVzLCBkZWxldGVUb2RvSXRlbUNvbXBsZXRlZCB9IGZyb20gJy4vanMvYXBwJztcclxuaW1wb3J0IHsgZ2V0Q291bnRlclZhbHVlIH0gZnJvbSAnLi9qcy90b2RvTGlzdENvdW50ZXInO1xyXG5pbXBvcnQgeyBnZXREYXJrTW9kZUljb25TdGF0ZSwgdG9nZ2xlRGFya01vZGVJY29uIH0gZnJvbSAnLi9qcy9kYXJrSW1hZ2UnO1xyXG5pbXBvcnQgeyBnZXREYXJrTW9kZVN0YXRlIH0gZnJvbSAnLi9qcy9kYXJrTW9kZSc7XHJcblxyXG5pbXBvcnQgdG9kb0xpc3RBY3Rpb25zIGZyb20gJy4vanMvdG9kb0xpc3RBY3Rpb25zJztcclxuaW1wb3J0IHRvZG9MaXN0RmlsdGVyIGZyb20gJy4vanMvdG9kb0xpc3RGaWx0ZXInO1xyXG5cclxuY29uc3QgcnVuQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xyXG4gIGNvbnN0IGZvcm1DaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtQ2hlY2snKTtcclxuICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Db250YWluZXInKTtcclxuICBjb25zdCBmaWx0ZXJpbmdPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcmluZ09wdGlvbnMnKTtcclxuICBjb25zdCBidG5DbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcl9fbGluaycpO1xyXG4gIGNvbnN0IGRhcmtNb2RlSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrTW9kZUljb24nKTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBnZXRUb2RvTGlzdCgpO1xyXG4gICAgZ2V0Q291bnRlclZhbHVlKCk7XHJcbiAgICBnZXREYXJrTW9kZUljb25TdGF0ZSgpO1xyXG4gICAgZ2V0RGFya01vZGVTdGF0ZSgpO1xyXG4gIH0pO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGdldEZvcm1WYWx1ZXMpO1xyXG5cclxuICBmb3JtQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT5cclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpXHJcbiAgKTtcclxuXHJcbiAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZG9MaXN0QWN0aW9ucyk7XHJcblxyXG4gIGZpbHRlcmluZ09wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2RvTGlzdEZpbHRlcik7XHJcblxyXG4gIGJ0bkNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kb0l0ZW1Db21wbGV0ZWQpO1xyXG5cclxuICBkYXJrTW9kZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVEYXJrTW9kZUljb24pO1xyXG59O1xyXG5cclxucnVuQXBwKCk7XHJcbiIsImltcG9ydCBjcmVhdGVUb2RvSXRlbSBmcm9tICcuL2NyZWF0ZVRvZG9JdGVtJztcclxuaW1wb3J0IHJlbmRlclRvZG9JdGVtIGZyb20gJy4vcmVuZGVyVG9kb0l0ZW0nO1xyXG5pbXBvcnQgY2xlYXJUb2RvSXRlbXNDb21wbGV0ZWQgZnJvbSAnLi9jbGVhclRvZG9JdGVtc0NvbXBsZXRlZCc7XHJcbmltcG9ydCByZXNldEZvcm1WYWx1ZXMgZnJvbSAnLi9yZXNldEZvcm1WYWx1ZXMnO1xyXG5pbXBvcnQgeyBpbmNyZW1lbnRDb3VudGVyIH0gZnJvbSAnLi90b2RvTGlzdENvdW50ZXInO1xyXG5cclxubGV0IHRvZG9MaXN0ID0gW107XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xyXG5jb25zdCBmb3JtQ2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUNoZWNrJyk7XHJcblxyXG5jb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpIHtcclxuICAgIHRvZG9MaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSk7XHJcbiAgICB0b2RvTGlzdC5tYXAocmVuZGVyVG9kb0l0ZW0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2RvTGlzdCA9IFtdO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNhdmVUb2RvTGlzdCA9ICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlVG9kb0l0ZW0gPSAoaWQpID0+IHtcclxuICBjb25zdCB0b2RvSXRlbUlkID0gTnVtYmVyKGlkKTtcclxuICB0b2RvTGlzdCA9IHRvZG9MaXN0LmZpbHRlcigodG9kb0l0ZW0pID0+IHRvZG9JdGVtLmlkICE9PSB0b2RvSXRlbUlkKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVRvZG9JdGVtQ29tcGxldGVkID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHRvZG9MaXN0LmZvckVhY2goKHRvZG9JdGVtKSA9PiB7XHJcbiAgICBjb25zdCBpc1RvZG9JdGVtQ29tcGxldGVkID0gdG9kb0l0ZW0uY29tcGxldGVkO1xyXG5cclxuICAgIGlmIChpc1RvZG9JdGVtQ29tcGxldGVkKSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHRvZG9JdGVtO1xyXG4gICAgICBkZWxldGVUb2RvSXRlbShpZCk7XHJcbiAgICAgIHNhdmVUb2RvTGlzdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjbGVhclRvZG9JdGVtc0NvbXBsZXRlZCgpO1xyXG59O1xyXG5cclxuY29uc3QgdG9nZ2xlVG9kb0l0ZW1Db21wbGV0ZWQgPSAoaWQpID0+IHtcclxuICBjb25zdCB0b2RvSXRlbUlkID0gTnVtYmVyKGlkKTtcclxuXHJcbiAgdG9kb0xpc3QgPSB0b2RvTGlzdC5tYXAoKHRvZG8pID0+IHtcclxuICAgIGlmICh0b2RvLmlkID09PSB0b2RvSXRlbUlkKSB7XHJcbiAgICAgIGNvbnN0IG5ld1RvZG9JdGVtID0ge1xyXG4gICAgICAgIC4uLnRvZG8sXHJcbiAgICAgICAgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQsXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBuZXdUb2RvSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9kbztcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEZvcm1WYWx1ZXMgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvSW5wdXQnKS52YWx1ZTtcclxuICBjb25zdCBpc0NoZWNrYm94Q29tcGxldGVkID0gZm9ybUNoZWNrLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGVkJyk7XHJcblxyXG4gIGlmIChpbnB1dFZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IG5ld1RvZG9JdGVtID0gY3JlYXRlVG9kb0l0ZW0oaW5wdXRWYWx1ZSwgaXNDaGVja2JveENvbXBsZXRlZCk7XHJcbiAgICByZW5kZXJUb2RvSXRlbShuZXdUb2RvSXRlbSk7XHJcbiAgICB0b2RvTGlzdCA9IFsuLi50b2RvTGlzdCwgbmV3VG9kb0l0ZW1dO1xyXG4gICAgc2F2ZVRvZG9MaXN0KCk7XHJcbiAgICBpbmNyZW1lbnRDb3VudGVyKCk7XHJcbiAgICByZXNldEZvcm1WYWx1ZXMoZm9ybSwgZm9ybUNoZWNrKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGdldEZvcm1WYWx1ZXMsXHJcbiAgdG9nZ2xlVG9kb0l0ZW1Db21wbGV0ZWQsXHJcbiAgZGVsZXRlVG9kb0l0ZW1Db21wbGV0ZWQsXHJcbiAgZGVsZXRlVG9kb0l0ZW0sXHJcbiAgc2F2ZVRvZG9MaXN0LFxyXG4gIGdldFRvZG9MaXN0LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBkZWNyZW1lbnRDb3VudGVyIH0gZnJvbSAnLi90b2RvTGlzdENvdW50ZXInO1xyXG5cclxuY29uc3QgY2xlYXJUb2RvSXRlbXNDb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kb0l0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb19faXRlbScpKTtcclxuXHJcbiAgdG9kb0l0ZW1zLmZvckVhY2goKHRvZG9JdGVtKSA9PiB7XHJcbiAgICBjb25zdCBpc1RvZG9JdGVtQ29tcGxldGVkID0gdG9kb0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZWQnKTtcclxuXHJcbiAgICBpZiAoaXNUb2RvSXRlbUNvbXBsZXRlZCkge1xyXG4gICAgICB0b2RvSXRlbS5yZW1vdmUoKTtcclxuICAgICAgZGVjcmVtZW50Q291bnRlcigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlYXJUb2RvSXRlbXNDb21wbGV0ZWQ7XHJcbiIsImNvbnN0IGNyZWF0ZVRvZG9JdGVtID0gKHRhc2ssIGNvbXBsZXRlZCkgPT4gKHtcclxuICBpZDogRGF0ZS5ub3coKSxcclxuICB0YXNrLFxyXG4gIGNvbXBsZXRlZCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvSXRlbTtcclxuIiwiaW1wb3J0IHN1bkljb24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pY29uLXN1bi5zdmcnO1xyXG5pbXBvcnQgbW9vbkljb24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1vb24uc3ZnJztcclxuXHJcbmltcG9ydCB7IHRvZ2dsZURhcmtNb2RlU3RhdGUgfSBmcm9tICcuL2RhcmtNb2RlJztcclxuXHJcbmNvbnN0IGdldERhcmtNb2RlSWNvblN0YXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhcmtNb2RlSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrTW9kZUljb24nKTtcclxuICBjb25zdCBkYXJrU3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrU3RhdGUnKSk7XHJcblxyXG4gIGlmIChkYXJrU3RhdGUpIHtcclxuICAgIGRhcmtNb2RlSWNvbi5zcmMgPSBtb29uSWNvbjtcclxuICB9IGVsc2Uge1xyXG4gICAgZGFya01vZGVJY29uLnNyYyA9IHN1bkljb247XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2F2ZURhcmtNb2RlSWNvblN0YXRlID0gKHN0YXRlKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtTdGF0ZScsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcbn07XHJcblxyXG5jb25zdCB0b2dnbGVEYXJrTW9kZUljb24gPSAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRJY29uID0gdGFyZ2V0O1xyXG4gIGN1cnJlbnRJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcclxuXHJcbiAgdG9nZ2xlRGFya01vZGVTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBoYXNEYXJrTW9kZSA9IGN1cnJlbnRJY29uLmNsYXNzTGlzdC5jb250YWlucygnZGFyaycpO1xyXG5cclxuICBpZiAoaGFzRGFya01vZGUpIHtcclxuICAgIGN1cnJlbnRJY29uLnNyYyA9IG1vb25JY29uO1xyXG4gICAgc2F2ZURhcmtNb2RlSWNvblN0YXRlKGhhc0RhcmtNb2RlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudEljb24uc3JjID0gc3VuSWNvbjtcclxuICAgIHNhdmVEYXJrTW9kZUljb25TdGF0ZShoYXNEYXJrTW9kZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdG9nZ2xlRGFya01vZGVJY29uLCBnZXREYXJrTW9kZUljb25TdGF0ZSB9O1xyXG4iLCJjb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xyXG5cclxuY29uc3QgdG9nZ2xlRGFya01vZGVTdGF0ZSA9ICgpID0+IHtcclxuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcclxufTtcclxuXHJcbmNvbnN0IGdldERhcmtNb2RlU3RhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGFya1N0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya1N0YXRlJykpO1xyXG5cclxuICBpZiAoZGFya1N0YXRlKSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdG9nZ2xlRGFya01vZGVTdGF0ZSwgZ2V0RGFya01vZGVTdGF0ZSB9O1xyXG4iLCJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ljb24tY3Jvc3Muc3ZnJztcclxuXHJcbmNvbnN0IHJlbmRlclRvZG9JdGVtID0gKHsgaWQsIHRhc2ssIGNvbXBsZXRlZCB9KSA9PiB7XHJcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQ29udGFpbmVyJyk7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwidG9kb19faXRlbSAke2NvbXBsZXRlZCA/ICdjb21wbGV0ZWQnIDogJyd9IFwiIGlkPVwiJHtpZH1cIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2hlY2tcIj48L2Rpdj5cclxuXHJcbiAgICA8cCBjbGFzcz1cInRvZG9fX3RleHRcIj4ke3Rhc2t9PC9wPlxyXG5cclxuICAgIDxpbWcgc3JjPVwiJHtkZWxldGVJY29ufVwiIGNsYXNzPVwidG9kb19fZGVsZXRlXCIgLz5cclxuICAgIFxyXG4gIDwvZGl2PmA7XHJcblxyXG4gIGNvbnN0IHRvZG9JdGVtID0gZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICB0b2RvQ29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIHRvZG9JdGVtKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRvZG9JdGVtO1xyXG4iLCJjb25zdCByZXNldEZvcm1WYWx1ZXMgPSAoZm9ybSwgZm9ybUNoZWNrKSA9PiB7XHJcbiAgY29uc3QgaXNDaGVja2JveENvbXBsZXRlZCA9IGZvcm1DaGVjay5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlZCcpO1xyXG5cclxuICBpZiAoaXNDaGVja2JveENvbXBsZXRlZCkge1xyXG4gICAgZm9ybUNoZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xyXG4gIH1cclxuXHJcbiAgZm9ybS5yZXNldCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzZXRGb3JtVmFsdWVzO1xyXG4iLCJpbXBvcnQgeyBzYXZlVG9kb0xpc3QsIHRvZ2dsZVRvZG9JdGVtQ29tcGxldGVkLCBkZWxldGVUb2RvSXRlbSB9IGZyb20gJy4vYXBwJztcclxuaW1wb3J0IHsgZGVjcmVtZW50Q291bnRlciB9IGZyb20gJy4vdG9kb0xpc3RDb3VudGVyJztcclxuXHJcbmNvbnN0IGNsZWFyVG9kb0l0ZW0gPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHRvZG9JdGVtID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICBjb25zdCB0b2RvSXRlbUlkID0gdG9kb0l0ZW0uZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG5cclxuICBkZWxldGVUb2RvSXRlbSh0b2RvSXRlbUlkKTtcclxuICBzYXZlVG9kb0xpc3QoKTtcclxuICBkZWNyZW1lbnRDb3VudGVyKCk7XHJcbiAgdG9kb0l0ZW0ucmVtb3ZlKCk7XHJcbn07XHJcblxyXG5jb25zdCB0b2dnbGVDaGVja2JveCA9IChlKSA9PiB7XHJcbiAgY29uc3QgdG9kb0l0ZW0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gIGNvbnN0IHRvZG9JdGVtSWQgPSB0b2RvSXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcblxyXG4gIHRvZ2dsZVRvZG9JdGVtQ29tcGxldGVkKHRvZG9JdGVtSWQpO1xyXG4gIHNhdmVUb2RvTGlzdCgpO1xyXG4gIHRvZG9JdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xyXG59O1xyXG5cclxuY29uc3QgdG9kb0xpc3RBY3Rpb25zID0gKGUpID0+IHtcclxuICBjb25zdCBpc0NoZWNrQnV0dG9uID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpO1xyXG4gIGNvbnN0IGlzRGVsZXRlQnV0dG9uID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvX19kZWxldGUnKTtcclxuXHJcbiAgaWYgKGlzQ2hlY2tCdXR0b24pIHtcclxuICAgIHRvZ2dsZUNoZWNrYm94KGUpO1xyXG4gIH0gZWxzZSBpZiAoaXNEZWxldGVCdXR0b24pIHtcclxuICAgIGNsZWFyVG9kb0l0ZW0oZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0xpc3RBY3Rpb25zO1xyXG4iLCJjb25zdCBjb3VudGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Db3VudGVyJyk7XHJcblxyXG5sZXQgY291bnRlciA9IDA7XHJcbmNvdW50ZXJDb250YWluZXIudGV4dENvbnRlbnQgPSBjb3VudGVyO1xyXG5cclxuY29uc3Qgc2F2ZUNvdW50ZXJWYWx1ZSA9ICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnRlcicsIEpTT04uc3RyaW5naWZ5KGNvdW50ZXIpKTtcclxufTtcclxuXHJcbmNvbnN0IGdldENvdW50ZXJWYWx1ZSA9ICgpID0+IHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvdW50ZXInKSkge1xyXG4gICAgY291bnRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvdW50ZXInKSk7XHJcbiAgICBjb3VudGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gY291bnRlcjtcclxuICB9IGVsc2Uge1xyXG4gICAgY291bnRlciA9IDA7XHJcbiAgICBjb3VudGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gY291bnRlcjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpbmNyZW1lbnRDb3VudGVyID0gKCkgPT4ge1xyXG4gIGNvdW50ZXIgKz0gMTtcclxuICBjb3VudGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gY291bnRlcjtcclxuICBzYXZlQ291bnRlclZhbHVlKCk7XHJcbn07XHJcblxyXG5jb25zdCBkZWNyZW1lbnRDb3VudGVyID0gKCkgPT4ge1xyXG4gIGNvdW50ZXIgLT0gMTtcclxuICBjb3VudGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gY291bnRlcjtcclxuICBzYXZlQ291bnRlclZhbHVlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRDb3VudGVyVmFsdWUsIGluY3JlbWVudENvdW50ZXIsIGRlY3JlbWVudENvdW50ZXIgfTtcclxuIiwiY29uc3QgZmlsdGVyRm9yVGV4dENvbnRlbnQgPSAodG9kb0l0ZW0sIHRleHRDb250ZW50KSA9PiB7XHJcbiAgY29uc3QgaXNUb2RvSXRlbUNvbXBsZXRlZCA9IHRvZG9JdGVtLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGVkJyk7XHJcblxyXG4gIHN3aXRjaCAodGV4dENvbnRlbnQpIHtcclxuICAgIGNhc2UgJ0FjdGl2ZSc6XHJcbiAgICAgIGlmIChpc1RvZG9JdGVtQ29tcGxldGVkKSB7XHJcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnQ29tcGxldGVkJzpcclxuICAgICAgaWYgKCFpc1RvZG9JdGVtQ29tcGxldGVkKSB7XHJcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdG9kb0xpc3RGaWx0ZXIgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyTmFtZSA9IGUudGFyZ2V0O1xyXG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0NvbnRhaW5lcicpO1xyXG4gIGNvbnN0IHRvZG9JdGVtcyA9IEFycmF5LmZyb20odG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb19faXRlbScpKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uTGlua3MgPSBBcnJheS5mcm9tKFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcmluZy1vcHRpb25zX19saW5rJylcclxuICApO1xyXG5cclxuICBpZiAoIWZpbHRlck5hbWUudGV4dENvbnRlbnQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRvZG9JdGVtcy5tYXAoKHRvZG9JdGVtKSA9PiB7XHJcbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICBvcHRpb25MaW5rcy5mb3JFYWNoKChvcHRpb24pID0+IG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcclxuICAgIGZpbHRlck5hbWUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICBjb25zdCB7IHRleHRDb250ZW50IH0gPSBmaWx0ZXJOYW1lO1xyXG4gICAgZmlsdGVyRm9yVGV4dENvbnRlbnQodG9kb0l0ZW0sIHRleHRDb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gdG9kb0l0ZW07XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvTGlzdEZpbHRlcjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbi1jcm9zcy42ZWU4MWQzMGI3NWNhYjE5ZDZmNzMxNDYyNGZjYzRkNi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29uLW1vb24uNmMwMzExNGI0OTVkMDVmNDM4MGIzYzU0NGQ5YWZlMmEuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbi1zdW4uOTEwYjFmOWEyMzc0MWFmYzM0MWU5NTY1M2E1MWYxNGYuc3ZnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
