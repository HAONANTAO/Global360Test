import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TodoListComponent } from './todo-list.component'
import { TodoService } from './todo.service'
import { of } from 'rxjs'

describe('TodoListComponent', () => {
  let component: TodoListComponent
  let fixture: ComponentFixture<TodoListComponent>
  let todoServiceSpy: jasmine.SpyObj<TodoService>

  beforeEach(async () => {
    todoServiceSpy = jasmine.createSpyObj('TodoService', [
      'getTodos',
      'addTodo',
      'deleteTodo',
      'updateTodo',
      'searchTodos',
    ])
    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
      providers: [{ provide: TodoService, useValue: todoServiceSpy }],
    }).compileComponents()
    fixture = TestBed.createComponent(TodoListComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should load todos on init', () => {
    const mockTodos = [
      { id: 1, title: 'A', content: 'B' },
      { id: 2, title: 'C', content: 'D' },
    ]
    todoServiceSpy.getTodos.and.returnValue(of(mockTodos))
    component.ngOnInit()
    expect(component.todos.length).toBe(2)
  })

  it('should add todo', () => {
    const newTodo = { id: 3, title: 'E', content: 'F' }
    todoServiceSpy.addTodo.and.returnValue(of(newTodo))
    component.newTitle = 'E'
    component.newContent = 'F'
    component.addTodo()
    expect(component.todos.some((t) => t.title === 'E')).toBeTrue()
  })

  it('should delete todo', () => {
    component.todos = [
      { id: 1, title: 'A', content: 'B' },
      { id: 2, title: 'C', content: 'D' },
    ]
    todoServiceSpy.deleteTodo.and.returnValue(of(void 0))
    component.deleteTodo(1)
    expect(component.todos.length).toBe(1)
    expect(component.todos[0].id).toBe(2)
  })
})
