// src/data/notesData.ts
export type Note = {
  title: string;
  definition: string;
  use: string;
  problem: string;
  example: string;
  image?: string;
};

export type Category = {
  name: string;
  notes: Note[];
};

export const notes: Record<string, Note[]> = {
  "Creational Design Patterns": [
    {
      title: "Singleton",
      definition:
        "Ensures a class has only one instance and provides a global point of access to it.",
      use: "When exactly one object is needed to coordinate actions across the system.",
      problem:
        "Prevents multiple instances that could cause inconsistent state or resource conflicts.",
      example: "Logging service, configuration manager, database connection pool.",
      image: "/notes/creational/SingletonPattern.png",
    },
    {
      title: "Factory Method",
      definition:
        "Defines an interface for creating an object but lets subclasses decide which class to instantiate.",
      use: "When a class cannot anticipate the class of objects it must create.",
      problem:
        "Removes direct dependency on concrete classes and centralizes object creation.",
      example: "Creating different types of notifications (email, SMS, push).",
      image: "/notes/creational/FactoryPattern.png",
    },
    {
      title: "Builder",
      definition:
        "Separates the construction of a complex object from its representation so the same process can create different representations.",
      use: "When an object has many optional parameters or requires step-by-step construction.",
      problem: "Avoids telescoping constructors and improves readability.",
      example: "Building a complex pizza object with customizable toppings and size.",
      image: "/notes/creational/BuilderPattern.png",
    },
    {
      title: "Abstract Factory",
      definition:
        "Provides an interface for creating families of related or dependent objects without specifying their concrete classes.",
      use: "When your system must work with multiple product families but remain independent of their implementation.",
      problem: "Ensures compatible products and makes switching product families easy.",
      example: "GUI libraries that produce Windows, macOS, or Linux-specific UI elements.",
      image: "/notes/creational/AbstractFactoryPattern.png",
    },
    {
      title: "Prototype",
      definition:
        "Specifies the kinds of objects to create using a prototypical instance and creates new objects by copying this prototype.",
      use: "When object creation is expensive or complex and can be simplified by cloning.",
      problem: "Avoids costly re-initialization and makes creating new objects efficient.",
      example: "Creating new shapes in a graphic editor by cloning an existing shape.",
      image: "/notes/creational/PrototypePattern.png",
    },
  ],
  "Structural Design Patterns": [
    {
      title: "Adapter",
      definition:
        "Converts the interface of a class into another interface clients expect.",
      use: "When you want to use an existing class but its interface is incompatible with the system.",
      problem: "Allows classes with incompatible interfaces to work together.",
      example: "Power adapter converting a two-pin plug to a three-pin socket.",
      image: "/notes/structural/AdapterPattern.png",
    },
    {
      title: "Decorator",
      definition:
        "Attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing.",
      use: "When you want to add behavior to individual objects at runtime.",
      problem: "Extends functionality without modifying the original class.",
      example: "Adding extra toppings to a pizza without changing the base class.",
      image: "/notes/structural/DecoratorPattern.png",
    },
    {
      title: "Facade",
      definition:
        "Provides a unified interface to a set of interfaces in a subsystem.",
      use: "When you want to simplify complex subsystems for clients.",
      problem: "Reduces complexity by exposing a single entry point.",
      example: "Home theater remote controlling multiple subsystems.",
      image: "/notes/structural/FacadePattern.png",
    },
    {
      title: "Composite",
      definition:
        "Composes objects into tree structures to represent part-whole hierarchies.",
      use: "When clients need to treat individual objects and compositions uniformly.",
      problem: "Simplifies working with recursive hierarchies.",
      example: "Folder and file structures supporting common operations like open, delete.",
      image: "/notes/structural/CompositePattern.png",
    },
    {
      title: "Proxy",
      definition:
        "Provides a surrogate or placeholder for another object to control access to it.",
      use: "When you need access control, lazy loading, or logging before delegating to real object.",
      problem: "Adds a controlled layer before the actual object.",
      example: "Virtual proxy for loading high-resolution images only when required.",
      image: "/notes/structural/ProxyPattern.png",
    },
    {
      title: "Bridge",
      definition:
        "Decouples an abstraction from its implementation so that both can vary independently.",
      use: "When abstraction and implementation should evolve independently.",
      problem: "Avoids class explosion by separating abstraction and implementation.",
      example: "Remote control (abstraction) working with multiple TV brands (implementations).",
      image: "/notes/structural/BridgePattern.png",
    },
    {
      title: "Flyweight",
      definition:
        "Uses sharing to support large numbers of fine-grained objects efficiently.",
      use: "When you have many similar objects sharing common state.",
      problem: "Reduces memory footprint by sharing intrinsic state.",
      example:
        "Characters in a text editor sharing the same font object but having different positions.",
      image: "/notes/structural/FlyweightPattern.png",
    },
  ],
  "Behavioral Design Patterns": [
    {
      title: "Strategy",
      definition:
        "Defines a family of algorithms, encapsulates each one, and makes them interchangeable.",
      use: "When you want to dynamically switch between algorithms.",
      problem: "Removes complex conditionals for algorithm selection.",
      example: "Payment strategy (credit card, UPI, PayPal).",
      image: "/notes/behavioral/StrategyPattern.png",
    },
    {
      title: "Observer",
      definition:
        "Defines a one-to-many dependency so when one object changes, all dependents are notified.",
      use: "When multiple objects must be updated after a state change.",
      problem: "Decouples subject from observers.",
      example: "Notification system broadcasting updates to subscribers.",
      image: "/notes/behavioral/ObserverPattern.png",
    },
    {
      title: "Command",
      definition:
        "Encapsulates a request as an object, letting you queue, log, or undo it.",
      use: "When you need to parameterize requests or support undo/redo.",
      problem: "Decouples invoker from receiver of a request.",
      example: "Text editor undo/redo system.",
      image: "/notes/behavioral/CommandPattern.png",
    },
    {
      title: "State",
      definition:
        "Allows an object to alter its behavior when its internal state changes.",
      use: "When an object’s behavior depends on its state and must change at runtime.",
      problem: "Replaces complex state-based conditionals with polymorphism.",
      example: "Media player changing behavior based on Play/Pause/Stop state.",
      image: "/notes/behavioral/StatePattern.png",
    },
    {
      title: "Chain of Responsibility",
      definition:
        "Passes a request along a chain of handlers until one handles it.",
      use: "When more than one object may handle a request.",
      problem: "Decouples sender from receiver and supports dynamic handler order.",
      example: "Customer service escalation process.",
      image: "/notes/behavioral/ChainOfResponsibilityPattern.png",
    },
    {
      title: "Mediator",
      definition:
        "Defines an object that encapsulates how a set of objects interact.",
      use: "When objects interact in complex but predictable ways.",
      problem: "Reduces direct dependencies among objects.",
      example: "Air traffic control tower coordinating planes.",
      image: "/notes/behavioral/MediatorPattern.png",
    },
    {
      title: "Memento",
      definition:
        "Captures and externalizes an object’s internal state without violating encapsulation.",
      use: "When you need undo/rollback functionality.",
      problem: "Saves state for later restoration.",
      example: "Text editor undo feature.",
      image: "/notes/behavioral/MementoPattern.png",
    },
    {
      title: "Template Method",
      definition:
        "Defines the skeleton of an algorithm and lets subclasses redefine certain steps.",
      use: "When multiple classes share the same process but differ in certain steps.",
      problem: "Promotes code reuse and consistent flow.",
      example: "Online order processing with different payment/delivery variations.",
      image: "/notes/behavioral/TemplatePattern.png",
    },
    {
      title: "Visitor",
      definition:
        "Represents an operation to be performed on elements of an object structure without changing the elements’ classes.",
      use: "When you need to add new operations without modifying existing structures.",
      problem:
        "Avoids modifying element classes every time a new operation is needed.",
      example: "Tax calculation on different product categories.",
      image: "/notes/behavioral/VisitorPattern.png",
    },
    {
      title: "Interpreter",
      definition:
        "Defines a representation for a grammar and an interpreter to interpret sentences.",
      use: "When you need to evaluate language expressions or DSLs.",
      problem: "Makes grammar extensible by representing rules as classes.",
      example: "SQL query parser, mathematical expression evaluator.",
      image: "/notes/behavioral/InterpreterPattern.png",
    },
    {
      title: "Iterator",
      definition:
        "Provides a way to access elements of an aggregate sequentially without exposing its representation.",
      use: "When you want a standard traversal mechanism for collections.",
      problem: "Separates traversal logic from collection implementation.",
      example: "Iterating through arrays, lists, or custom collections.",
      image: "/notes/behavioral/IteratorPattern.png",
    },
  ],
};
