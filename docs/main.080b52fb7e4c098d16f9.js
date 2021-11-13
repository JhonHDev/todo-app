(self.webpackChunktodo_app = self.webpackChunktodo_app || []).push([
  [179],
  {
    228: (t) => {
      t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      };
    },
    646: (t, e, n) => {
      var o = n(228);
      t.exports = function (t) {
        if (Array.isArray(t)) return o(t);
      };
    },
    575: (t) => {
      t.exports = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      };
    },
    913: (t) => {
      function e(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      t.exports = function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    },
    713: (t) => {
      t.exports = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      };
    },
    860: (t) => {
      t.exports = function (t) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      };
    },
    206: (t) => {
      t.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    319: (t, e, n) => {
      var o = n(646),
        r = n(860),
        i = n(379),
        a = n(206);
      t.exports = function (t) {
        return o(t) || r(t) || i(t) || a();
      };
    },
    379: (t, e, n) => {
      var o = n(228);
      t.exports = function (t, e) {
        if (t) {
          if ('string' == typeof t) return o(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(t, e)
              : void 0
          );
        }
      };
    },
    336: (t, e, n) => {
      'use strict';
      var o = n(575),
        r = n.n(o),
        i = n(913),
        a = n.n(i);
      const c = (function () {
          function t() {
            r()(this, t),
              (this.counter = 0),
              (this.$counterContainer = document.getElementById('todoCounter')),
              (this.$counterContainer.textContent = this.counter);
          }
          return (
            a()(t, [
              {
                key: 'saveCounterValue',
                value: function () {
                  localStorage.setItem('counter', JSON.stringify(this.counter));
                },
              },
              {
                key: 'getCounterValue',
                value: function () {
                  localStorage.getItem('counter')
                    ? ((this.counter = JSON.parse(
                        localStorage.getItem('counter')
                      )),
                      (this.$counterContainer.textContent = this.counter))
                    : ((this.counter = 0),
                      (this.$counterContainer.textContent = this.counter));
                },
              },
              {
                key: 'incrementCounter',
                value: function () {
                  (this.counter += 1),
                    (this.$counterContainer.textContent = this.counter),
                    this.saveCounterValue();
                },
              },
              {
                key: 'decrementCounter',
                value: function () {
                  (this.counter -= 1),
                    (this.$counterContainer.textContent = this.counter),
                    this.saveCounterValue();
                },
              },
            ]),
            t
          );
        })(),
        s = n.p + 'assets/images/icon-sun.910b1f9a23741afc341e95653a51f14f.svg',
        u =
          n.p + 'assets/images/icon-moon.6c03114b495d05f4380b3c544d9afe2a.svg',
        d = (function () {
          function t() {
            r()(this, t),
              (this.$body = document.body),
              (this.$darkModeIcon = document.getElementById('darkModeIcon')),
              (this.state = !1);
          }
          return (
            a()(t, [
              {
                key: 'toggleDarkModeState',
                value: function () {
                  this.$body.classList.toggle('dark'),
                    (this.state = !this.state);
                },
              },
              {
                key: 'getDarkModeState',
                value: function () {
                  JSON.parse(localStorage.getItem('darkState'))
                    ? this.$body.classList.add('dark')
                    : this.$body.classList.remove('dark');
                },
              },
              {
                key: 'saveDarkModeIconState',
                value: function () {
                  localStorage.setItem('darkState', JSON.stringify(this.state));
                },
              },
              {
                key: 'getDarkModeIconState',
                value: function () {
                  var t = JSON.parse(localStorage.getItem('darkState'));
                  this.$darkModeIcon.src = t ? u : s;
                },
              },
              {
                key: 'toggleDarkModeIcon',
                value: function (t) {
                  var e = t.target;
                  e.classList.toggle('dark'), this.toggleDarkModeState();
                  var n = e.classList.contains('dark');
                  n
                    ? ((e.src = u), this.saveDarkModeIconState(n))
                    : ((e.src = s), this.saveDarkModeIconState(n));
                },
              },
            ]),
            t
          );
        })(),
        l = (function () {
          function t() {
            r()(this, t),
              (this.$form = document.getElementById('form')),
              (this.$formCheck = document.getElementById('formCheck'));
          }
          return (
            a()(t, [
              {
                key: 'getInputValue',
                value: function (t) {
                  return new FormData(this.$form).get(t);
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.$formCheck.classList.contains('completed') &&
                    this.$formCheck.classList.remove('completed'),
                    this.$form.reset();
                },
              },
            ]),
            t
          );
        })(),
        f = function t(e, n) {
          r()(this, t),
            (this.id = Date.now()),
            (this.name = e),
            (this.isCompleted = n);
        },
        m = (function () {
          function t() {
            r()(this, t),
              (this.$todoContainer = document.getElementById('todoContainer')),
              (this.name = '');
          }
          return (
            a()(t, [
              {
                key: 'filterForName',
                value: function (t) {
                  var e = t.classList.contains('completed');
                  switch (this.name) {
                    case 'Active':
                      e && t.classList.add('hidden');
                      break;
                    case 'Completed':
                      e || t.classList.add('hidden');
                  }
                },
              },
              {
                key: 'getNameToFilter',
                value: function (t) {
                  var e = this;
                  t.preventDefault();
                  var n = t.target;
                  (this.$todoItems = Array.from(
                    this.$todoContainer.querySelectorAll('.todo__item')
                  )),
                    (this.$optionLinks = Array.from(
                      document.querySelectorAll('.filtering-options__link')
                    )),
                    n.textContent &&
                      this.$todoItems.map(function (t) {
                        t.classList.remove('hidden'),
                          e.$optionLinks.forEach(function (t) {
                            return t.classList.remove('selected');
                          }),
                          n.classList.add('selected');
                        var o = n.textContent;
                        return (e.name = o), e.filterForName(t), t;
                      });
                },
              },
            ]),
            t
          );
        })();
      var g = n(713),
        p = n.n(g),
        h = n(319),
        y = n.n(h);
      function v(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? v(Object(n), !0).forEach(function (e) {
                p()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      const k = (function () {
          function t() {
            r()(this, t), this.getTodoList();
          }
          return (
            a()(t, [
              {
                key: 'addTask',
                value: function (t) {
                  (this.todos = [].concat(y()(this.todos), [t])),
                    this.saveTodoList();
                },
              },
              {
                key: 'toggleTodoItemCompleted',
                value: function (t) {
                  (this.todos = this.todos.map(function (e) {
                    return e.id === t
                      ? b(b({}, e), {}, { isCompleted: !e.isCompleted })
                      : e;
                  })),
                    this.saveTodoList();
                },
              },
              {
                key: 'deleteTask',
                value: function (t) {
                  (this.todos = this.todos.filter(function (e) {
                    return e.id !== t;
                  })),
                    this.saveTodoList();
                },
              },
              {
                key: 'saveTodoList',
                value: function () {
                  localStorage.setItem('todos', JSON.stringify(this.todos));
                },
              },
              {
                key: 'getTodoList',
                value: function () {
                  this.todos = localStorage.getItem('todos')
                    ? JSON.parse(localStorage.getItem('todos'))
                    : [];
                },
              },
            ]),
            t
          );
        })(),
        O =
          n.p + 'assets/images/icon-cross.6ee81d30b75cab19d6f7314624fcc4d6.svg',
        C = function (t) {
          var e = t.id,
            n = t.name,
            o = t.isCompleted,
            r = document.createElement('div');
          return (
            (r.innerHTML = '\n  <div class="todo__item '
              .concat(o ? 'completed' : '', ' " id="')
              .concat(
                e,
                '">\n\n    <div class="check"></div>\n\n    <p class="todo__text">'
              )
              .concat(n, '</p>\n\n    <img src="')
              .concat(O, '" class="todo__delete" />\n    \n  </div>')),
            r.firstElementChild
          );
        };
      function I(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function S(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      var j,
        L,
        w,
        E,
        D,
        P,
        $ = {
          todoList: new k(),
          taskFilter: new m(),
          counter: new c(),
          darkMode: new d(),
        };
      (j = document.getElementById('form')),
        (L = document.getElementById('formCheck')),
        (w = document.getElementById('todoContainer')),
        (E = document.querySelector('.clear__link')),
        (D = document.getElementById('filteringOptions')),
        (P = document.getElementById('darkModeIcon')),
        window.addEventListener('DOMContentLoaded', function () {
          !(function (t) {
            var e = t.todoList,
              n = t.darkMode,
              o = t.counter,
              r = document.getElementById('todoContainer');
            e.todos.forEach(function (t) {
              var e = C(
                (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? I(Object(n), !0).forEach(function (e) {
                          p()(t, e, n[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : I(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(n, e)
                          );
                        });
                  }
                  return t;
                })({}, t)
              );
              r.insertAdjacentElement('afterbegin', e);
            }),
              n.getDarkModeState(),
              n.getDarkModeIconState(),
              o.getCounterValue();
          })($);
        }),
        j.addEventListener('submit', function (t) {
          !(function (t, e) {
            var n = e.todoList,
              o = e.counter;
            t.preventDefault();
            var r = document.getElementById('formCheck'),
              i = document.getElementById('todoContainer'),
              a = new l(),
              c = r.classList.contains('completed'),
              s = new f(a.getInputValue('todoValue'), c);
            n.addTask(s), o.incrementCounter();
            var u = C(
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? S(Object(n), !0).forEach(function (e) {
                        p()(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : S(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e)
                        );
                      });
                }
                return t;
              })({}, s)
            );
            i.insertAdjacentElement('afterbegin', u), a.reset();
          })(t, $);
        }),
        L.addEventListener('click', function (t) {
          t.target.classList.toggle('completed');
        }),
        w.addEventListener('click', function (t) {
          !(function (t, e) {
            var n,
              o,
              r = e.todoList,
              i = e.counter,
              a = t.target.classList.contains('check'),
              c = t.target.classList.contains('todo__delete');
            a
              ? ((n = t.target.parentElement),
                (o = Number(n.getAttribute('id'))),
                n.classList.toggle('completed'),
                r.toggleTodoItemCompleted(o))
              : c &&
                ((n = t.target.parentElement),
                (o = Number(n.getAttribute('id'))),
                r.deleteTask(o),
                i.decrementCounter(),
                n.remove());
          })(t, $);
        }),
        E.addEventListener('click', function (t) {
          !(function (t, e) {
            var n = e.todoList,
              o = e.counter;
            t.preventDefault(),
              n.todos.forEach(function (t) {
                t.isCompleted &&
                  (document.getElementById(t.id).remove(),
                  n.deleteTask(t.id),
                  n.saveTodoList(),
                  o.decrementCounter());
              });
          })(t, $);
        }),
        D.addEventListener('click', function (t) {
          $.taskFilter.getNameToFilter(t);
        }),
        P.addEventListener('click', function (t) {
          $.darkMode.toggleDarkModeIcon(t);
        });
    },
  },
  0,
  [[336, 666]],
]);
//# sourceMappingURL=main.080b52fb7e4c098d16f9.js.map
