
export const db = [

    {
        category: "General tech knowledge",
        subcategories: [
            {
                topicName: "Tech overview",
                entries: [
                    {
                        "term": "ABAP",
                        "explanation": "ABAP (Advanced Business Application Programming) is a high-level programming language developed by SAP for building applications on the SAP platform. It is primarily used for developing enterprise applications that run in the SAP ecosystem, such as SAP ERP and SAP S/4HANA. ABAP supports procedural and object-oriented programming paradigms and integrates seamlessly with SAP databases and application servers. The language is optimized for business logic implementation, data manipulation, and report generation within SAP environments. ABAP plays a crucial role in extending and customizing SAP applications to meet business requirements.",
                        "question": "What is ABAP, and how is it used in SAP development?"
                    },
                    {
                        "term": "WSO2",
                        "explanation": "WSO2 is an open-source integration platform that provides tools for API management, identity and access management, enterprise service bus (ESB), and analytics. It enables organizations to integrate disparate systems, expose APIs securely, and manage digital identity across applications. WSO2 supports microservices architecture, cloud deployments, and event-driven integration patterns. It is widely used in enterprise environments to facilitate communication between applications and services, ensuring interoperability and seamless data flow across heterogeneous systems.",
                        "question": "What is WSO2, and how is it used for enterprise integration?"
                    },
                    {
                        "term": "KIS",
                        "explanation": "KIS (Klinisches Informationssystem) is a hospital information system used to manage medical and administrative processes within healthcare institutions. It provides functionalities such as patient record management, appointment scheduling, medication tracking, and clinical documentation. KIS integrates with laboratory systems, radiology systems, and financial modules to create a centralized digital infrastructure for hospitals. It enhances operational efficiency by improving data accessibility, reducing paperwork, and enabling better decision-making for healthcare professionals.",
                        "question": "What is a KIS system, and how does it support healthcare operations?"
                    },
                    {
                        "term": "HL7",
                        "explanation": "HL7 (Health Level 7) is a set of international standards for exchanging, integrating, sharing, and retrieving electronic health information. It defines structured messaging formats, clinical document architectures, and interoperability frameworks that enable different healthcare systems to communicate effectively. HL7 standards include HL7 v2 (a widely adopted messaging standard), HL7 v3 (an XML-based standard), and FHIR (a modern web-based standard). HL7 facilitates interoperability between hospitals, laboratories, and health information exchanges by ensuring that data is transmitted in a consistent and interpretable format.",
                        "question": "What is HL7, and how does it facilitate healthcare interoperability?"
                    },
                    {
                        "term": ".NET",
                        "explanation": ".NET is a software development framework created by Microsoft that allows developers to build applications for web, desktop, cloud, and mobile environments. It provides a runtime (Common Language Runtime - CLR), a set of libraries, and development tools that support multiple programming languages, including C#, F#, and VB.NET. The framework includes ASP.NET for web development, .NET Core for cross-platform applications, and Windows Presentation Foundation (WPF) for desktop applications. .NET is widely used for enterprise applications due to its scalability, security, and integration with cloud services.",
                        "question": "What is .NET, and what are its main components?"
                    },
                    {
                        "term": "C#",
                        "explanation": "C# is a modern, object-oriented programming language developed by Microsoft as part of the .NET ecosystem. It is designed for building robust and scalable applications ranging from desktop to cloud-based services. C# includes features such as strong typing, automatic memory management, and asynchronous programming. It supports advanced paradigms like LINQ for data manipulation, ASP.NET for web applications, and Entity Framework for database interactions. C# is widely used in enterprise development, game development (via Unity), and cloud-based solutions.",
                        "question": "What is C#, and what are its key features?"
                    },
                    {
                        "term": "APEX",
                        "explanation": "APEX is a strongly-typed, object-oriented programming language designed by Salesforce for developing applications within the Salesforce ecosystem. It enables developers to create custom business logic, process automation, and integrations within Salesforce environments. APEX is closely integrated with Salesforce’s database and security model, allowing developers to perform operations such as querying records, triggering workflows, and handling complex business rules. It is optimized for multi-tenant cloud environments, ensuring scalability and security in customer relationship management (CRM) applications.",
                        "question": "What is APEX, and how is it used in Salesforce development?"
                    },
                    {
                        "term": "SAP",
                        "explanation": "SAP (Systems, Applications, and Products in Data Processing) is a leading enterprise software company that provides solutions for managing business operations and customer relations. SAP’s flagship product, SAP ERP, integrates core business processes such as finance, human resources, supply chain, and procurement. The company has evolved to offer cloud-based solutions, including SAP S/4HANA, SAP Business Technology Platform (BTP), and SAP Analytics Cloud. SAP software is widely adopted by enterprises for optimizing business operations, enabling data-driven decision-making, and improving overall efficiency.",
                        "question": "What is SAP, and what are its primary products?"
                    },
                    {
                        "term": "ERP",
                        "explanation": "Enterprise Resource Planning (ERP) is a category of business management software that integrates core organizational processes into a unified system. ERP systems provide modules for finance, human resources, supply chain, manufacturing, and customer relationship management. These systems improve operational efficiency by streamlining workflows, centralizing data, and enabling real-time reporting. Leading ERP vendors include SAP, Oracle, Microsoft Dynamics, and Workday. Modern ERP solutions are increasingly cloud-based, allowing for greater flexibility, scalability, and integration with emerging technologies such as AI and IoT.",
                        "question": "What is ERP, and why is it essential for businesses?"
                    },
                    {
                        "term": "BAPI",
                        "explanation": "BAPI (Business Application Programming Interface) is a standardized interface that allows external applications to interact with SAP systems. It provides predefined methods for accessing business objects such as customers, orders, and invoices within SAP ERP. BAPIs are commonly used for data integration, automation, and extending SAP functionalities without modifying the core system. They enable seamless communication between SAP and non-SAP systems, facilitating enterprise-wide interoperability. BAPIs are structured according to the SAP Business Object Repository, ensuring consistency and reusability.",
                        "question": "What is BAPI, and how is it used in SAP integrations?"
                    },
                    {
                        "term": "DICOM",
                        "explanation": "DICOM (Digital Imaging and Communications in Medicine) is an international standard for storing, transmitting, and sharing medical imaging data. It defines data formats, network protocols, and interoperability mechanisms for handling images from modalities such as X-ray, MRI, and CT scans. DICOM ensures that imaging devices, hospital information systems, and radiology information systems can exchange and interpret images consistently. The standard includes metadata about patients, imaging procedures, and diagnostic information, making it essential for electronic health records and clinical workflows.",
                        "question": "What is DICOM, and why is it important in medical imaging?"
                    },
                    {
                        "term": "FHIR",
                        "explanation": "FHIR (Fast Healthcare Interoperability Resources) is a modern standard developed by HL7 for exchanging healthcare information using web technologies. It enables seamless interoperability between healthcare applications by defining structured resources such as Patient, Observation, and MedicationRequest. FHIR supports RESTful APIs, making data accessible via standard HTTP operations. It also allows data representation in JSON and XML formats. FHIR is widely adopted in electronic health records (EHR), telemedicine, and healthcare analytics due to its scalability, ease of implementation, and support for mobile and cloud-based applications.",
                        "question": "What is FHIR, and how does it improve healthcare data exchange?"
                    },


                    { "term": "Citrix Files", "explanation": "", "question": "" },
                    { "term": "Cisco Jabber", "explanation": "", "question": "" },
                    { "term": "Power Shell", "explanation": "", "question": "" },
                    { "term": "Citrix Workspace", "explanation": "", "question": "" },
                    { "term": "Dolby Access", "explanation": "", "question": "" },
                    { "term": "FileZilla", "explanation": "", "question": "" },
                    { "term": "Greenshot", "explanation": "", "question": "" },
                    { "term": "ImgBurn", "explanation": "", "question": "" },
                    { "term": "Kaspersky Endpoint Security for Windows", "explanation": "", "question": "" },
                    { "term": "PolyPoint", "explanation": "", "question": "" },
                    { "term": "Webex", "explanation": "", "question": "" },
                    { "term": "XMind", "explanation": "", "question": "" },
                    { "term": "ARTS", "explanation": "", "question": "" },
                    { "term": "BIC3", "explanation": "", "question": "" },
                    { "term": "Ibi-care V6", "explanation": "", "question": "" },
                    { "term": "Omnitracker 12 client", "explanation": "", "question": "" },
                    { "term": "Sunet plus", "explanation": "", "question": "" },
                    { "term": "UKA solutions", "explanation": "", "question": "" },
                    { "term": "Panopto", "explanation": "", "question": "" },
                    { "term": "Adobe Acrobat DC", "explanation": "", "question": "" },


                ]
            },
        ],
    },

    {
        category: "WSO2",
        subcategories: [
            {
                topicName: "Fundamental concepts and terms",
                entries: [
                    { "term": "WSO2 HTTP methods", "explanation": "GET = Retrieves data from a resource,\nPUT = Updates or creates a resource,\nPOST = Creates a new resource,\nDELETE = Removes a resource,\nPATCH = Partially updates a resource,\nHEAD = Retrieves headers for a resource without the body,\nOPTIONS = Retrieves allowed HTTP methods for a resource", "question": "" },
                    { "term": "WSO2 API lifecycle", "explanation": "CREATED = Initial state where the API is designed but not yet available for use\n, PRE-RELEASED = API is tested internally but not yet available to external consumers\n, PUBLISHED = API is publicly available for consumption\n, BLOCKED = API access is restricted due to policy or security reasons\n, DEPRECEATED = API is still available but marked for removal in the future\n, RETIRED = API is no longer available for use\n", "question": "" },
                    { "term": "WSO2 API Product", "explanation": "A combination of resources from one or more available APIs. A product can be subscribed to manage the consumption of grouped resources > APIs.", "question": "" },
                    { "term": "WSO2 API Visibility", "explanation": "A modification who can view APIs on the Developer Portal.\nPublic = visible to everyone\nRestricted by role = Only user which required role\nVisible to my domain = Only users registered to API creators tenant domain.", "question": "" },
                    { "term": "", "explanation": "", "question": "" },
                ]
            },
            {
                topicName: "WSO2 ESB Server",
                entries: [
                    { "term": "ESB meaning", "explanation": "Enterprise Service Bus", "question": "" },
                ]
            },
            {
                topicName: "WSO2 Micro Integrator",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "FHIR",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "DICOM",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    }, {
        category: "BAPI",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "ERP",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "SAP",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "APEX",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "C#",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: ".NET",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "HL7",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "KIS",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "ABAP",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "API architecture",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },
    {
        category: "DSG Daten schutz gesetz CH",
        subcategories: [
            {
                topicName: "x",
                entries: [
                    {
                    },
                ]
            },
        ],
    },



    {
        category: "Basics",
        subcategories: [
            {
                topicName: "Alg optimisation",
                entries: [
                    { "term": "Space complexity", "explanation": "Analyzes how much memory an algorithm uses relative to the input size. Recursive algorithms often have O(n) space complexity due to stack usage.", "question": "What does space complexity analyze in an algorithm?" },
                    { "term": "Amortized analysis", "explanation": "Analyzes the average cost of operations over a sequence of operations. Useful for dynamic arrays with O(1) amortized insertion due to occasional resizing.", "question": "What is the purpose of amortized analysis in algorithms?" },
                    { "term": "Average case complexity", "explanation": "Analyzes the expected runtime of an algorithm over all possible inputs. Example: QuickSort has O(n log n) average case but O(n²) worst case.", "question": "How does average case complexity differ from worst-case complexity?" },
                    { "term": "Energy complexity", "explanation": "Measures the energy consumed by an algorithm when run on hardware. Important for low-power and embedded systems.", "question": "Why is energy complexity significant for certain systems?" },
                    { "term": "Cache efficiency", "explanation": "Focuses on how well an algorithm utilizes CPU caches and memory hierarchies. Example: Merge Sort is more cache-efficient than QuickSort due to contiguous memory access.", "question": "How does cache efficiency impact algorithm performance?" },
                    { "term": "Parallel complexity", "explanation": "Measures performance improvement when algorithms are parallelized. Example: An O(n) algorithm might become O(log n) with n processors.", "question": "What is parallel complexity, and how can it improve algorithm performance?" },
                    { "term": "Communication complexity", "explanation": "Focuses on the cost of communication in distributed algorithms, such as network overhead.", "question": "What does communication complexity measure in distributed systems?" },
                    { "term": "I/O complexity", "explanation": "Measures the number of input/output operations between memory and disk. Useful for large-scale data processing like sorting.", "question": "How does I/O complexity affect large-scale data processing?" },
                    { "term": "P (Polynomial Time)", "explanation": "Problems solvable in polynomial time. Example: Sorting algorithms like Merge Sort.", "question": "What are P problems in computational complexity theory?" },
                    { "term": "NP (Nondeterministic Polynomial Time)", "explanation": "Problems verifiable in polynomial time but not necessarily solvable in polynomial time. Example: Traveling Salesman Problem.", "question": "What distinguishes NP problems from P problems?" },
                    { "term": "EXP (Exponential Time)", "explanation": "Problems solvable in exponential time. Example: Solving the n-queens problem via brute force.", "question": "What are EXP problems, and why are they computationally expensive?" },
                    { "term": "try-catch", "explanation": "Handles exceptions during runtime. Example:\n```java\ntry {...;} catch (IOException e) {\n    System.err.println(e.getMessage());\n}\n```", "question": "How can try-catch blocks improve failure tolerance in Java?" },
                    { "term": "Retry logic", "explanation": "Attempts to execute code multiple times in case of failure. Example:\n```java\nint retries = 3;\nwhile (retries > 0) {\n    try {...; break;} catch (Exception e) {\n        retries--;\n    }\n}\nif (retries == 0) {\n    System.err.println(\"Failed after retries\");\n}\n```", "question": "How can retry logic be implemented for failure tolerance?" },
                    { "term": "Fallback", "explanation": "Provides a default value or behavior when an operation fails. Example:\n```java\ntry {...;} catch (Exception e) {\n    return \"default value\";\n}\n```", "question": "What is a fallback mechanism, and how can it be implemented?" }
                ]
            },
            {
                topicName: "Big O",
                entries: [
                    { "term": "Big-O application", "explanation": "Big-O notation helps to understand the efficiency of an algorithm by analyzing its time or space complexity as input size grows. It is used to compare different approaches to solve the same problem, enabling developers to select the most optimal one. This ensures scalability and efficient resource utilization in software systems.", "question": "Why is Big-O notation important in algorithm design?" },
                    { "term": "O(1) - Constant", "explanation": "Execution time remains constant regardless of the input size. This implies the algorithm executes in the same amount of time for any input size. Constant time is the most efficient complexity class for an operation.\nint method(int[] arr) {\n    return arr[0]; // always one operation\n}", "question": "What is an example of a constant time algorithm?" },
                    { "term": "O(log n) - Logarithmic", "explanation": "Execution time grows logarithmically as input size increases. This complexity occurs in divide-and-conquer algorithms, where the problem size reduces by a factor of 2 in each step.\nint binarySearch(int[] arr, int target) {\n    int low = 0, high = arr.length - 1;\n    while (low <= high) {\n        int mid = (low + high) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}", "question": "What is an example of a logarithmic time algorithm?" },
                    { "term": "O(n) - Linear", "explanation": "Execution time grows linearly with input size. For every additional input, the time increases proportionally. This is common in algorithms that process each element of the input exactly once.\nint findMax(int[] arr) {\n    int max = arr[0];\n    for (int num : arr) {\n        if (num > max) max = num; // Loops n times\n    }\n    return max;\n}", "question": "What is an example of a linear time algorithm?" },
                    { "term": "O(n log n) - Linearithmic", "explanation": "Execution time grows proportionally with n times log n. This complexity is common in efficient sorting algorithms like Merge Sort and QuickSort (average case).\nvoid mergeSort(int[] arr) {\n    if (arr.length <= 1) return;\n    // Split, sort, and merge logic\n}", "question": "What is an example of a linearithmic time algorithm?" },
                    { "term": "O(n²) - Quadratic", "explanation": "Execution time grows quadratically as the input size increases. This occurs in algorithms with nested loops, where each element is compared or interacted with every other element.\nvoid bubbleSort(int[] arr) {\n    for (int i = 0; i < arr.length; i++) {\n        for (int j = 0; j < arr.length - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                // Swap elements\n            }\n        }\n    }\n}", "question": "What is an example of a quadratic time algorithm?" },
                    { "term": "O(2ⁿ) - Exponential", "explanation": "Execution time doubles with each additional input, making it impractical for large input sizes. This complexity often appears in recursive algorithms without proper optimization, such as calculating Fibonacci numbers.\nint fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2); // Recursive calls grow exponentially\n}", "question": "What is an example of an exponential time algorithm?" },
                    { "term": "Big-Ω (Omega) - Best Case", "explanation": "Represents the lower bound of an algorithm’s performance. It indicates the best-case runtime, which occurs when the input is most favorable.\n\nExample: Searching in a sorted array, where the best case is O(1) if the element is the first one.", "question": "What does Big-Ω notation represent in algorithm analysis?" },
                    { "term": "Big-Θ (Theta) - Tight Bound", "explanation": "Represents both the upper and lower bounds of an algorithm’s runtime, meaning the algorithm always takes this time for any input of a given size.\n\nExample: Iterating through an array always takes O(n) time.", "question": "What does Big-Θ notation represent, and can you give an example?" },
                    { "term": "Little-o", "explanation": "Represents the strict upper bound of an algorithm. It means the algorithm’s runtime grows slower than the given bound. Used in theoretical contexts to indicate non-asymptotic upper limits.\n\nExample: If f(n) = n and g(n) = n², then f(n) = o(g(n)) since n grows slower than n².", "question": "What does Little-o notation represent in algorithm analysis?" },
                    { "term": "Little-ω", "explanation": "Represents the strict lower bound of an algorithm, meaning the algorithm's runtime grows faster than the given bound. It is used in theoretical discussions to indicate runtime growth beyond a specific threshold.\n\nExample: If f(n) = n² and g(n) = n, then f(n) = ω(g(n)) since n² grows faster than n.", "question": "What does Little-ω notation represent in algorithm analysis?" }

                ]
            },
            {
                topicName: "OO programming",
                entries: [
                    { "term": "Inheritance", "explanation": "x", "question": "x" },
                    { "term": "Polymorphism", "explanation": "x", "question": "x" },
                    { "term": "Abstraction", "explanation": "x", "question": "x" },
                    { "term": "Encapsulation", "explanation": "x", "question": "x" },
                    { "term": "Multithreading", "explanation": "x", "question": "x" },
                    { "term": "Synchronization", "explanation": "x", "question": "x" },
                ]
            },
        ],
    },

    {
        category: "Java",
        subcategories: [
            {
                topicName: "Java Random",
                entries: [
                    { "term": "JDK", "explanation": "Java Development Kit - A software development kit that includes the JRE, a compiler, and tools for developing Java applications.", "question": "What is the Java Development Kit (JDK), and what does it include?" },
                    { "term": "JRE", "explanation": "Java Runtime Environment - A runtime environment that provides the necessary libraries and JVM to run Java applications.", "question": "What is the Java Runtime Environment (JRE), and what is it used for?" },
                    { "term": "JVM", "explanation": "Java Virtual Machine - A virtual machine that executes Java bytecode and provides platform independence.", "question": "What is the Java Virtual Machine (JVM), and what is its primary purpose?" },
                    { "term": "local variable", "explanation": "A variable declared within a method or block, only accessible within that scope. Use them for temporary storage and avoid when data is needed outside the method.", "question": "What is a local variable, and where can it be accessed?" },
                    { "term": "instance variable", "explanation": "A variable declared inside a class but outside any method, tied to an object. Use them for properties unique to each instance of a class.", "question": "What is an instance variable, and how is it associated with a class?" },
                    { "term": "static variable", "explanation": "A variable declared with the 'static' keyword, shared among all instances of a class. Use them for values shared across all objects.", "question": "What is a static variable, and how does it differ from instance variables?" },
                    { "term": "Unicode system", "explanation": "A character encoding standard supporting a wide range of characters and symbols from different languages. Use for internationalization and multilingual text handling.", "question": "What is the Unicode system, and why is it used?" },
                    { "term": "ASCII", "explanation": "A 7-bit character encoding standard representing 128 characters. Use for basic English text and control characters; avoid for non-English text.", "question": "What is ASCII, and what is its primary purpose?" },
                    { "term": "ISO 8859-1", "explanation": "A character encoding standard for Western European languages, supporting 256 characters. Use for legacy systems; avoid for multilingual applications.", "question": "What is ISO 8859-1, and where is it commonly used?" },
                    { "term": "KOI-8", "explanation": "A character encoding standard for Cyrillic script. Use in systems requiring Russian or Ukrainian text support; avoid for non-Cyrillic languages.", "question": "What is KOI-8, and for which languages is it used?" },
                    { "term": "GB18030", "explanation": "A Chinese character encoding standard supporting a wide range of Unicode characters. Use for Chinese text; avoid for non-Chinese languages.", "question": "What is GB18030, and why is it significant?" },
                    { "term": "BIG-5", "explanation": "A character encoding standard for traditional Chinese. Use for systems supporting traditional Chinese text; avoid for simplified Chinese or other languages.", "question": "What is BIG-5 encoding, and where is it commonly applied?" },
                    { "term": "OOP inheritance", "explanation": "Inheritance allows a class (child class) to acquire the properties and methods of another class (parent class). This promotes code reuse and hierarchy.\nCode Sample:\nclass Parent {\n    void display() {\n        System.out.println(\"Parent class method\");\n    }\n}\nclass Child extends Parent {\n    void show() {\n        System.out.println(\"Child class method\");\n    }\n}\nChild c = new Child();\nc.display();\nc.show();", "question": "What is inheritance in OOP, and how is it implemented?" },
                    { "term": "OOP data binding", "explanation": "Data binding is the process of linking a data source to a UI element or variable in a program, enabling automatic updates.\nCode Sample:\nclass DataBindingExample {\n    private String data;\n\n    public String getData() {\n        return data;\n    }\n\n    public void setData(String data) {\n        this.data = data;\n    }\n}\nDataBindingExample example = new DataBindingExample();\nexample.setData(\"Bound Data\");\nSystem.out.println(example.getData());", "question": "What is data binding in OOP, and why is it useful?" },
                    { "term": "OOP polymorphism", "explanation": "Polymorphism allows methods to perform different tasks based on the object calling them. It can be achieved through method overloading and overriding.\nCode Sample:\nclass Parent {\n    void display() {\n        System.out.println(\"Parent class method\");\n    }\n}\nclass Child extends Parent {\n    @Override\n    void display() {\n        System.out.println(\"Child class method\");\n    }\n}\nParent p = new Child();\np.display();", "question": "What is polymorphism in OOP, and how is it demonstrated?" },
                    { "term": "OOP abstraction", "explanation": "Abstraction is the process of hiding implementation details and showing only essential features of an object.\nCode Sample:\nabstract class Shape {\n    abstract void draw();\n}\nclass Circle extends Shape {\n    @Override\n    void draw() {\n        System.out.println(\"Drawing Circle\");\n    }\n}\nShape shape = new Circle();\nshape.draw();", "question": "What is abstraction in OOP, and how is it implemented?" },
                    { "term": "OOP encapsulation", "explanation": "Encapsulation is the practice of wrapping data (fields) and methods that operate on the data into a single unit, typically a class, and restricting direct access to them.\nCode Sample:\nclass EncapsulationExample {\n    private int data;\n\n    public int getData() {\n        return data;\n    }\n\n    public void setData(int data) {\n        this.data = data;\n    }\n}\nEncapsulationExample obj = new EncapsulationExample();\nobj.setData(10);\nSystem.out.println(obj.getData());", "question": "What is encapsulation in OOP, and why is it important?" },
                    { "term": "OOP coupling", "explanation": "Coupling refers to the degree of dependency between two classes or modules. Low coupling is preferred as it increases modularity.\nCode Sample:\nclass Engine {\n    void start() {\n        System.out.println(\"Engine started\");\n    }\n}\nclass Car {\n    private Engine engine;\n\n    Car(Engine engine) {\n        this.engine = engine;\n    }\n\n    void startCar() {\n        engine.start();\n    }\n}\nEngine engine = new Engine();\nCar car = new Car(engine);\ncar.startCar();", "question": "What is coupling in OOP, and how does it impact design?" },
                    { "term": "OOP cohesion", "explanation": "Cohesion refers to the degree to which the elements of a module or class belong together. High cohesion is desirable as it improves maintainability.\nCode Sample:\nclass Account {\n    void deposit(double amount) {\n        System.out.println(\"Deposited: \" + amount);\n    }\n\n    void withdraw(double amount) {\n        System.out.println(\"Withdrew: \" + amount);\n    }\n}\nAccount account = new Account();\naccount.deposit(100.0);\naccount.withdraw(50.0);", "question": "What is cohesion in OOP, and why is high cohesion preferred?" },
                    { "term": "OOP association", "explanation": "Association is the relationship between two objects, where one object uses or interacts with another. It can be one-to-one, one-to-many, many-to-one, or many-to-many.\nCode Sample:\nclass Author {\n    String name;\n\n    Author(String name) {\n        this.name = name;\n    }\n}\nclass Book {\n    Author author;\n\n    Book(Author author) {\n        this.author = author;\n    }\n\n    void displayAuthor() {\n        System.out.println(\"Author: \" + author.name);\n    }\n}\nAuthor author = new Author(\"John\");\nBook book = new Book(author);\nbook.displayAuthor();", "question": "What is association in OOP, and how is it represented?" },
                    { "term": "OOP aggregation", "explanation": "Aggregation is a weak relationship between two objects where one object contains another, but they can exist independently.\nCode Sample:\nclass Department {\n    String name;\n\n    Department(String name) {\n        this.name = name;\n    }\n}\nclass University {\n    List<Department> departments = new ArrayList<>();\n\n    void addDepartment(Department department) {\n        departments.add(department);\n    }\n\n    void displayDepartments() {\n        departments.forEach(d -> System.out.println(d.name));\n    }\n}\nDepartment dept1 = new Department(\"CS\");\nDepartment dept2 = new Department(\"Math\");\nUniversity university = new University();\nuniversity.addDepartment(dept1);\nuniversity.addDepartment(dept2);\nuniversity.displayDepartments();", "question": "What is aggregation in OOP, and how does it differ from composition?" },
                    { "term": "OOP composition", "explanation": "Composition is a strong relationship where one object owns another, and the contained object cannot exist independently.\nCode Sample:\nclass Engine {\n    void start() {\n        System.out.println(\"Engine started\");\n    }\n}\nclass Car {\n    private Engine engine = new Engine();\n\n    void startCar() {\n        engine.start();\n    }\n}\nCar car = new Car();\ncar.startCar();", "question": "What is composition in OOP, and how is it different from aggregation?" },
                    { "term": "Naming convention: Class", "explanation": "It should start with the uppercase letter. It should be a noun such as Color, Button, System, Thread, etc. Use appropriate words, instead of acronyms.", "question": "What are the naming conventions for a class in Java?" },
                    { "term": "Naming convention: Interface", "explanation": "It should start with the uppercase letter. It should be an adjective such as Runnable, Remote, ActionListener. Use appropriate words, instead of acronyms.", "question": "What are the naming conventions for an interface in Java?" },
                    { "term": "Naming convention: Method", "explanation": "It should start with lowercase letter. It should be a verb such as main(), print(), println(). If the name contains multiple words, start it with a lowercase letter followed by an uppercase letter such as actionPerformed().", "question": "What are the naming conventions for a method in Java?" },
                    { "term": "Naming convention: Variable", "explanation": "It should start with a lowercase letter such as id, name. It should not start with special characters like & (ampersand), $ (dollar), _ (underscore). If the name contains multiple words, start it with the lowercase letter followed by an uppercase letter such as firstName, lastName. Avoid using one-character variables such as x, y, z.", "question": "What are the naming conventions for variables in Java?" },
                    { "term": "Naming convention: Package", "explanation": "It should be in lowercase letters such as java, lang. If the name contains multiple words, it should be separated by dots (.) such as java.util, java.lang.", "question": "What are the naming conventions for a package in Java?" },
                    { "term": "Naming convention: Constant", "explanation": "It should be in uppercase letters such as RED, YELLOW. If the name contains multiple words, it should be separated by an underscore (_) such as MAX_PRIORITY. It may contain digits but not as the first letter.", "question": "What are the naming conventions for constants in Java?" },
                    { "term": "Serialization", "explanation": "Serialization is the process of converting an object's state into a byte stream so it can be saved to a file, database, or sent over a network. It is achieved in Java by implementing the `Serializable` interface.\nCode sample:\nimport java.io.*;\nclass Demo implements Serializable {\n    int id;\n    String name;\n    Demo(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n}\n// Serializing an object\nFileOutputStream fos = new FileOutputStream(\"data.ser\");\nObjectOutputStream oos = new ObjectOutputStream(fos);\noos.writeObject(new Demo(1, \"John\"));\noos.close();", "question": "What is serialization in Java, and how is it achieved?" },
                    { "term": "Class hierarchy", "explanation": "Class hierarchy refers to the structure of classes in Java where classes are arranged in a tree-like format through inheritance. At the top of the hierarchy is the `Object` class.\nCode sample:\nclass Animal {}\nclass Dog extends Animal {}\nclass Puppy extends Dog {}\n// Class hierarchy: Object -> Animal -> Dog -> Puppy", "question": "What is a class hierarchy in Java?" },
                    { "term": "Object class", "explanation": "The `Object` class is the root of the Java class hierarchy. Every class in Java inherits from it. It provides common methods like `toString()`, `hashCode()`, `equals()`, and `getClass()`.\nCode sample:\nclass Demo {\n    public static void main(String[] args) {\n        Object obj = new String(\"Example\");\n        System.out.println(obj.getClass()); // Output: class java.lang.String\n    }\n}", "question": "What is the `Object` class in Java, and what are its key methods?" },
                    { "term": "HAS-A relationship", "explanation": "The HAS-A relationship represents composition or aggregation where one class contains a reference to another class.\nCode sample:\nclass Engine {}\nclass Car {\n    private Engine engine; // HAS-A relationship\n}", "question": "What does a HAS-A relationship mean in Java?" },
                    { "term": "IS-A relationship", "explanation": "The IS-A relationship represents inheritance, where a class extends another class.\nCode sample:\nclass Animal {}\nclass Dog extends Animal {} // IS-A relationship\n", "question": "What does an IS-A relationship mean in Java?" },
                    { "term": "Method overloading", "explanation": "Method overloading allows a class to have multiple methods with the same name but different parameter lists.\nCode sample:\nclass Calculator {\n    int add(int a, int b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n}", "question": "What is method overloading in Java?" },
                    { "term": "Method overriding", "explanation": "Method overriding allows a subclass to provide a specific implementation for a method already defined in its superclass.\nCode sample:\nclass Animal {\n    void sound() { System.out.println(\"Animal makes sound\"); }\n}\nclass Dog extends Animal {\n    @Override\n    void sound() { System.out.println(\"Dog barks\"); }\n}", "question": "What is method overriding in Java?" },
                    { "term": "Covariant return type", "explanation": "Covariant return type allows a subclass method to override a method in the superclass and return a type that is a subclass of the original return type.\nCode sample:\nclass Parent {\n    Parent get() { return this; }\n}\nclass Child extends Parent {\n    @Override\n    Child get() { return this; }\n}", "question": "What is a covariant return type in Java?" },
                    { "term": "Runtime polymorphism", "explanation": "Runtime polymorphism is achieved through method overriding and allows a subclass to dynamically provide specific behavior during runtime.\nCode sample:\nclass Animal {\n    void sound() { System.out.println(\"Animal sound\"); }\n}\nclass Dog extends Animal {\n    @Override\n    void sound() { System.out.println(\"Dog barks\"); }\n}\nAnimal a = new Dog();\na.sound(); // Output: Dog barks", "question": "What is runtime polymorphism in Java?" },
                    { "term": "Compile-time polymorphism", "explanation": "Compile-time polymorphism is achieved through method overloading and is resolved during compilation.\nCode sample:\nclass Calculator {\n    int add(int a, int b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n}\nCalculator calc = new Calculator();\ncalc.add(5, 10); // Calls int version", "question": "What is compile-time polymorphism in Java?" },
                    { "term": "Dynamic binding", "explanation": "Dynamic binding refers to resolving method calls during runtime. It is used in method overriding.\nCode sample:\nclass Animal {\n    void sound() { System.out.println(\"Animal sound\"); }\n}\nclass Dog extends Animal {\n    @Override\n    void sound() { System.out.println(\"Dog barks\"); }\n}\nAnimal a = new Dog();\na.sound(); // Output: Dog barks", "question": "What is dynamic binding in Java?" },
                    { "term": "Static binding", "explanation": "Static binding refers to resolving method calls during compile time. It is used in method overloading.\nCode sample:\nclass Calculator {\n    void print(int num) { System.out.println(\"Number: \" + num); }\n    void print(double num) { System.out.println(\"Decimal: \" + num); }\n}\nnew Calculator().print(5); // Output: Number: 5", "question": "What is static binding in Java?" },
                    { "term": "Static vs dynamic binding", "explanation": "Static binding occurs during compile-time and applies to overloaded methods. Dynamic binding occurs during runtime and applies to overridden methods.\nCode sample:\nclass Base {\n    void display() { System.out.println(\"Base class\"); }\n}\nclass Derived extends Base {\n    @Override\n    void display() { System.out.println(\"Derived class\"); }\n}\nBase obj = new Derived();\nobj.display(); // Dynamic binding: Output Derived class", "question": "What is the difference between static and dynamic binding in Java?" },
                    { "term": "instanceof operator", "explanation": "The `instanceof` operator tests whether an object is an instance of a specific class or subclass.\nCode sample:\nclass Animal {}\nclass Dog extends Animal {}\nAnimal obj = new Dog();\nSystem.out.println(obj instanceof Dog); // Output: true", "question": "What does the `instanceof` operator do in Java?" },
                    { "term": "Single Dimensional Array", "explanation": "A single-dimensional array is a collection of elements stored in a contiguous memory location and accessed using a single index.\nCode sample:\nint[] arr = {1, 2, 3, 4};\nSystem.out.println(arr[2]); // Output: 3", "question": "What is a single-dimensional array in Java, and how is it used?" },
                    { "term": "Multidimensional Array", "explanation": "A multidimensional array is an array of arrays. It is used to represent a matrix or grid-like structure.\nCode sample:\nint[][] matrix = {{1, 2}, {3, 4}};\nSystem.out.println(matrix[1][0]); // Output: 3", "question": "What is a multidimensional array in Java, and how is it used?" },
                    { "term": "Object cloning", "explanation": "Object cloning creates an exact copy of an object. It is achieved in Java using the `clone()` method from the `Cloneable` interface.\nCode sample:\nclass Demo implements Cloneable {\n    int id;\n    String name;\n    Demo(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n    protected Object clone() throws CloneNotSupportedException {\n        return super.clone();\n    }\n}\nDemo original = new Demo(1, \"John\");\nDemo copy = (Demo) original.clone();", "question": "How is object cloning implemented in Java?" },
                    { "term": "Wrapper class", "explanation": "A wrapper class converts primitive types into objects and provides utility methods. Common examples are `Integer`, `Double`, and `Boolean`.\nCode sample:\nint num = 10;\nInteger wrappedNum = Integer.valueOf(num);\nint unwrapped = wrappedNum.intValue();\nSystem.out.println(wrappedNum); // Output: 10", "question": "What are wrapper classes in Java, and how are they used?" },
                    { "term": "Java recursion", "explanation": "Recursion is a technique where a method calls itself to solve a smaller subproblem.\nCode sample:\nclass Factorial {\n    int factorial(int n) {\n        if (n == 0) return 1;\n        return n * factorial(n - 1);\n    }\n}\nSystem.out.println(new Factorial().factorial(5)); // Output: 120", "question": "What is recursion in Java, and how is it implemented?" },
                    { "term": "Call by value vs call by reference", "explanation": "In Java, arguments are passed by value, meaning a copy of the variable is passed. Java does not support call by reference.\nCode sample:\nclass Test {\n    void changeValue(int num) {\n        num = 50;\n    }\n}\nint num = 10;\nnew Test().changeValue(num);\nSystem.out.println(num); // Output: 10", "question": "What is the difference between call by value and call by reference in Java?" },
                    { "term": "javadoc tool", "explanation": "The `javadoc` tool generates API documentation in HTML format from Java source code, using specially formatted comments.\nCode sample:\n/**\n * This is a demo class.\n */\nclass Demo {\n    /**\n     * Prints a greeting message.\n     */\n    void greet() {\n        System.out.println(\"Hello, World!\");\n    }\n}\n// Generate documentation: javadoc Demo.java", "question": "What is the purpose of the `javadoc` tool in Java?" },
                    { "term": "Java command-line argument", "explanation": "Command-line arguments are inputs passed to a Java program during execution. They are accessed through the `String[] args` parameter in the `main` method.\nCode sample:\nclass Demo {\n    public static void main(String[] args) {\n        for (String arg : args) {\n            System.out.println(arg);\n        }\n    }\n}\n// Run: java Demo arg1 arg2\n// Output:\n// arg1\n// arg2", "question": "What are Java command-line arguments, and how are they accessed?" }
                ]
            },
            {
                topicName: "Java Datatypes",
                entries: [
                    { "term": "primitive data types", "explanation": "Basic data types directly representing values (e.g., int, float). Use them for performance-critical operations. Avoid when more complex behavior is required.", "question": "What are primitive data types, and when are they typically used?" },
                    { "term": "non-primitive data types", "explanation": "Data types that are objects (e.g., String, Arrays). Use them when complex data structures or behaviors are required. Avoid for simple data.", "question": "What are non-primitive data types, and when are they typically used?" },
                    { "term": "boolean", "explanation": "A primitive type storing true or false values. Default size: 1 bit (implementation-dependent). Use for logical conditions; avoid for numerical operations.", "question": "What is the boolean data type, and when should it be used?" },
                    { "term": "char", "explanation": "A primitive type storing a single 16-bit Unicode character. Use for single characters; avoid for strings or complex text operations.", "question": "What is the char data type, and when is it appropriate to use?" },
                    { "term": "byte", "explanation": "A primitive integral type storing 8-bit integers (-128 to 127). Use for memory-critical operations; avoid when larger values are required.", "question": "What is the byte data type, and what is its range?" },
                    { "term": "short", "explanation": "A primitive integral type storing 16-bit integers (-32,768 to 32,767). Use for memory-critical operations with slightly larger values than byte; avoid when int suffices.", "question": "What is the short data type, and what is its range?" },
                    { "term": "int", "explanation": "A primitive integral type storing 32-bit integers (-2,147,483,648 to 2,147,483,647). Default for whole numbers; avoid for extremely large values.", "question": "What is the int data type, and what is its default use case?" },
                    { "term": "long", "explanation": "A primitive integral type storing 64-bit integers (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807). Use for large whole numbers; avoid for memory-critical tasks.", "question": "What is the long data type, and what is its range?" },
                    { "term": "float", "explanation": "A primitive type storing 32-bit single-precision floating-point numbers. Use for decimal values when precision isn't critical; avoid for exact calculations.", "question": "What is the float data type, and when should it be used?" },
                    { "term": "double", "explanation": "A primitive type storing 64-bit double-precision floating-point numbers. Use for decimal values requiring higher precision; avoid for exact monetary or critical calculations.", "question": "What is the double data type, and when is it commonly used?" },
                ]
            },
            {
                topicName: "Java Operators",
                entries: [
                    { "term": "Unary operator", "explanation": "An operator requiring a single operand, such as increment (++), decrement (--), or negation (!). Use for simple transformations; avoid when clarity is compromised.", "question": "What is a unary operator, and can you provide an example?" },
                    { "term": "Arithmetic operator", "explanation": "Operators performing basic mathematical operations: +, -, *, /, %. Use for calculations; avoid when logical or non-mathematical operations are required.", "question": "What are arithmetic operators, and what operations do they perform?" },
                    { "term": "Shift operator", "explanation": "Operators that shift bits in a number's binary representation: <<, >>, >>>. Use for bitwise manipulation; avoid for arithmetic operations.", "question": "What is a shift operator, and what is its purpose?" },
                    { "term": "Relational operator", "explanation": "Operators comparing two values: ==, !=, >, <, >=, <=. Use for comparisons; avoid for mathematical operations.", "question": "What are relational operators, and what is their primary use?" },
                    { "term": "Bitwise operator", "explanation": "Operators performing operations on binary representations: &, |, ^, ~. Use for low-level bit manipulation; avoid for general-purpose logic.", "question": "What are bitwise operators, and when are they typically used?" },
                    { "term": "Logical operator", "explanation": "Operators used in boolean logic: &&, ||, !. Use for conditional statements; avoid for arithmetic or bitwise operations.", "question": "What are logical operators, and in what context are they used?" },
                    { "term": "Ternary operator", "explanation": "A conditional operator taking three operands: condition ? value_if_true : value_if_false. Use for concise conditionals; avoid when clarity is compromised.", "question": "What is the ternary operator, and how does it work?" },
                    { "term": "Assignment operator", "explanation": "Operators assigning values: =, +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=. Use for variable assignment; avoid for comparisons.", "question": "What are assignment operators, and how are they used?" },
                ]
            },
            {
                topicName: "Java Controll statements",
                entries: [
                    { "term": "if-statement", "explanation": "The if-statement is used to execute a block of code if a specified condition evaluates to true.\nCode Sample:\nif (condition) {\n    // code to be executed if condition is true\n}", "question": "What is the purpose of the if-statement in Java?" },
                    { "term": "if-else statement", "explanation": "The if-else statement is used to execute one block of code if the condition is true, and another block if the condition is false.\nCode Sample:\nif (condition) {\n    // code to be executed if condition is true\n} else {\n    // code to be executed if condition is false\n}", "question": "How does the if-else statement work in Java?" },
                    { "term": "if-else-if ladder", "explanation": "The if-else-if ladder is used to test multiple conditions sequentially, executing the block of code corresponding to the first true condition.\nCode Sample:\nif (condition1) {\n    // code to be executed if condition1 is true\n} else if (condition2) {\n    // code to be executed if condition2 is true\n} else {\n    // code to be executed if no conditions are true\n}", "question": "What is the purpose of the if-else-if ladder in Java?" },
                    { "term": "nested if-statement", "explanation": "A nested if-statement is an if statement placed inside another if statement, allowing multiple levels of conditional testing.\nCode Sample:\nif (condition1) {\n    if (condition2) {\n        // code to be executed if condition1 and condition2 are true\n    }\n}", "question": "How do nested if-statements work in Java?" },
                    { "term": "switch statement", "explanation": "The switch statement tests a variable against a list of values and executes the block of code corresponding to the matching value.\nCode Sample:\nswitch (variable) {\n    case value1:\n        // code to be executed if variable == value1\n        break;\n    case value2:\n        // code to be executed if variable == value2\n        break;\n    default:\n        // code to be executed if no case matches\n}", "question": "What is the purpose of the switch statement in Java?" },
                    { "term": "for loop", "explanation": "The for loop is used to execute a block of code a specific number of times.\nCode Sample:\nfor (initialization; condition; update) {\n    // code to be executed\n}", "question": "How does the for loop work in Java?" },
                    { "term": "while loop", "explanation": "The while loop is used to execute a block of code as long as a specified condition evaluates to true.\nCode Sample:\nwhile (condition) {\n    // code to be executed\n}", "question": "What is the purpose of the while loop in Java?" },
                    { "term": "do-while loop", "explanation": "The do-while loop executes a block of code once, and then repeats the execution as long as the specified condition is true.\nCode Sample:\ndo {\n    // code to be executed\n} while (condition);", "question": "How does the do-while loop work in Java?" },
                    { "term": "for-each loop", "explanation": "The for-each loop is used to iterate over elements in a collection or array.\nCode Sample:\nfor (type element : collection) {\n    // code to be executed for each element\n}", "question": "What is the for-each loop used for in Java?" },
                    { "term": "jump statement", "explanation": "Jump statements are used to transfer control to another part of the program. Examples include break, continue, and return.\nCode Sample:\n// Example of break\nbreak;\n\n// Example of continue\ncontinue;\n\n// Example of return\nreturn value;", "question": "What are jump statements used for in Java?" },
                    { "term": "break statement", "explanation": "The break statement is used to exit a loop or switch statement prematurely.\nCode Sample:\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) {\n        break;\n    }\n    System.out.println(i);\n}", "question": "How is the break statement used in Java?" },
                    { "term": "continue statement", "explanation": "The continue statement skips the remaining code in the current iteration of a loop and proceeds to the next iteration.\nCode Sample:\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) {\n        continue;\n    }\n    System.out.println(i);\n}", "question": "What is the purpose of the continue statement in Java?" }
                ]
            },
            {
                topicName: "Java Keywords",
                entries: [
                    { "term": "Keyword: abstract", "explanation": "Java abstract keyword is used to declare an abstract class. An abstract class can provide the implementation of the interface. It can have abstract and non-abstract methods.", "question": "What does the abstract keyword do in Java?" },
                    { "term": "Keyword: boolean", "explanation": "Java boolean keyword is used to declare a variable as a boolean type. It can hold True and False values only.", "question": "What is the purpose of the boolean keyword in Java?" },
                    { "term": "Keyword: break", "explanation": "Java break keyword is used to break the loop or switch statement. It breaks the current flow of the program at specified conditions.", "question": "How is the break keyword used in Java?" },
                    { "term": "Keyword: byte", "explanation": "Java byte keyword is used to declare a variable that can hold 8-bit data values.", "question": "What is the byte keyword used for in Java?" },
                    { "term": "Keyword: case", "explanation": "Java case keyword is used with the switch statements to mark blocks of text.", "question": "What is the purpose of the case keyword in Java?" },
                    { "term": "Keyword: catch", "explanation": "Java catch keyword is used to catch the exceptions generated by try statements. It must be used after the try block only.", "question": "What is the role of the catch keyword in Java?" },
                    { "term": "Keyword: char", "explanation": "Java char keyword is used to declare a variable that can hold unsigned 16-bit Unicode characters.", "question": "What is the char keyword used for in Java?" },
                    { "term": "Keyword: class", "explanation": "Java class keyword is used to declare a class.", "question": "What is the class keyword used for in Java?" },
                    { "term": "Keyword: continue", "explanation": "Java continue keyword is used to continue the loop. It continues the current flow of the program and skips the remaining code at the specified condition.", "question": "What does the continue keyword do in Java?" },
                    { "term": "Keyword: default", "explanation": "Java default keyword is used to specify the default block of code in a switch statement.", "question": "What is the default keyword used for in Java?" },
                    { "term": "Keyword: do", "explanation": "Java do keyword is used in the control statement to declare a loop. It can iterate a part of the program several times.", "question": "What is the purpose of the do keyword in Java?" },
                    { "term": "Keyword: double", "explanation": "Java double keyword is used to declare a variable that can hold 64-bit floating-point number.", "question": "What is the double keyword used for in Java?" },
                    { "term": "Keyword: else", "explanation": "Java else keyword is used to indicate the alternative branches in an if statement.", "question": "How is the else keyword used in Java?" },
                    { "term": "Keyword: enum", "explanation": "Java enum keyword is used to define a fixed set of constants. Enum constructors are always private or default.", "question": "What does the enum keyword do in Java?" },
                    { "term": "Keyword: extends", "explanation": "Java extends keyword is used to indicate that a class is derived from another class or interface.", "question": "What is the purpose of the extends keyword in Java?" },
                    { "term": "Keyword: final", "explanation": "Java final keyword is used to indicate that a variable holds a constant value. It restricts the user from updating the variable value.", "question": "What is the final keyword used for in Java?" },
                    { "term": "Keyword: finally", "explanation": "Java finally keyword indicates a block of code in a try-catch structure. This block is always executed whether an exception is handled or not.", "question": "What is the role of the finally keyword in Java?" },
                    { "term": "Keyword: float", "explanation": "Java float keyword is used to declare a variable that can hold a 32-bit floating-point number.", "question": "What is the float keyword used for in Java?" },
                    { "term": "Keyword: for", "explanation": "Java for keyword is used to start a for loop. It executes a set of instructions repeatedly when a condition is true.", "question": "How is the for keyword used in Java?" },
                    { "term": "Keyword: if", "explanation": "Java if keyword tests the condition. It executes the if block if the condition is true.", "question": "What is the purpose of the if keyword in Java?" },
                    { "term": "Keyword: implements", "explanation": "Java implements keyword is used to implement an interface.", "question": "What does the implements keyword do in Java?" },
                    { "term": "Keyword: import", "explanation": "Java import keyword makes classes and interfaces available and accessible to the current source code.", "question": "What is the role of the import keyword in Java?" },
                    { "term": "Keyword: instanceof", "explanation": "Java instanceof keyword tests whether an object is an instance of a specified class or interface.", "question": "What is the instanceof keyword used for in Java?" },
                    { "term": "Keyword: int", "explanation": "Java int keyword is used to declare a variable that can hold a 32-bit signed integer.", "question": "What is the int keyword used for in Java?" },
                    { "term": "Keyword: interface", "explanation": "Java interface keyword is used to declare an interface with abstract methods.", "question": "What is the purpose of the interface keyword in Java?" },
                    { "term": "Keyword: long", "explanation": "Java long keyword is used to declare a variable that can hold a 64-bit integer.", "question": "What is the long keyword used for in Java?" },
                    { "term": "Keyword: native", "explanation": "Java native keyword specifies that a method is implemented in native code using JNI (Java Native Interface).", "question": "What is the role of the native keyword in Java?" },
                    { "term": "Keyword: new", "explanation": "Java new keyword is used to create new objects.", "question": "What is the purpose of the new keyword in Java?" },
                    { "term": "Keyword: null", "explanation": "Java null keyword indicates that a reference does not refer to anything.", "question": "What is the null keyword used for in Java?" },
                    { "term": "Keyword: package", "explanation": "Java package keyword is used to declare a Java package that includes the classes.", "question": "What does the package keyword do in Java?" },
                    { "term": "Keyword: private", "explanation": "Java private keyword is an access modifier that restricts access to methods or variables within the class.", "question": "What is the private keyword used for in Java?" },
                    { "term": "Keyword: protected", "explanation": "Java protected keyword is an access modifier that allows access within the package and through inheritance.", "question": "What is the protected keyword used for in Java?" },
                    { "term": "Keyword: public", "explanation": "Java public keyword is an access modifier that allows access from anywhere.", "question": "What is the public keyword used for in Java?" },
                    { "term": "Keyword: return", "explanation": "Java return keyword exits from a method and optionally returns a value.", "question": "What is the return keyword used for in Java?" },
                    { "term": "Keyword: short", "explanation": "Java short keyword is used to declare a variable that can hold a 16-bit integer.", "question": "What is the short keyword used for in Java?" },
                    { "term": "Keyword: static", "explanation": "Java static keyword indicates that a variable or method belongs to the class rather than an instance.\n\nStatic variables are shared across all instances of a class and are initialized once when the class is loaded.\n\nStatic methods belong to the class and can be invoked without creating an object, but they cannot directly access instance members.\n\nStatic blocks are executed when the class is loaded and are typically used for initializing static variables or performing class-level setup.\n\nStatic nested classes are associated with their outer class but can be used independently without requiring an instance of the outer class.", "question": "What is the purpose of the static keyword in Java?" },
                    { "term": "Keyword: strictfp", "explanation": "Java strictfp keyword restricts floating-point calculations to ensure portability.", "question": "What does the strictfp keyword do in Java?" },
                    { "term": "Keyword: super", "explanation": "Java super keyword refers to parent class objects and is used to invoke the immediate parent class method.", "question": "What is the role of the super keyword in Java?" },
                    { "term": "Keyword: switch", "explanation": "Java switch keyword executes code based on the test value in a switch statement.", "question": "What is the switch keyword used for in Java?" },
                    { "term": "Keyword: synchronized", "explanation": "Java synchronized keyword specifies critical sections or methods in multithreaded code.", "question": "What is the synchronized keyword used for in Java?" },
                    { "term": "Keyword: this", "explanation": "Java this keyword refers to the current object in a method or constructor.", "question": "What does the this keyword represent in Java?" },
                    { "term": "Keyword: throw", "explanation": "Java throw keyword explicitly throws an exception.", "question": "How is the throw keyword used in Java?" },
                    { "term": "Keyword: throws", "explanation": "Java throws keyword declares exceptions that a method can throw.", "question": "What is the purpose of the throws keyword in Java?" },
                    { "term": "Keyword: transient", "explanation": "Java transient keyword specifies that a field should not be serialized.", "question": "What does the transient keyword do in Java?" },
                    { "term": "Keyword: try", "explanation": "Java try keyword starts a block of code that is tested for exceptions.", "question": "What is the try keyword used for in Java?" },
                    { "term": "Keyword: void", "explanation": "Java void keyword specifies that a method does not return a value.", "question": "What is the role of the void keyword in Java?" },
                    { "term": "Keyword: volatile", "explanation": "Java volatile keyword indicates that a variable may change asynchronously.", "question": "What does the volatile keyword do in Java?" },
                    { "term": "Keyword: while", "explanation": "Java while keyword starts a while loop that iterates while a condition is true.", "question": "What is the purpose of the while keyword in Java?" }
                ]
            },
            /*
            {
                topicName: "Java Object class",
                entries: []
            },
            {
                topicName: "Java Inheritance",
                entries: []
            },
            {
                topicName: "Java Polymorphism",
                entries: []
            },
            {
                topicName: "Java Abstraction",
                entries: []
            },
            {
                topicName: "Java Encapsulation",
                entries: []
            },
            {
                topicName: "Java OOPs Misc",
                entries: []
            },
            */
            {
                topicName: "Java Exception Handling",
                entries: [
                    { "term": "ClassNotFoundException", "explanation": "Thrown when an application tries to load a class through its string name but no definition for the class is found.\nCode sample:\ntry {\n    Class.forName(\"NonExistentClass\");\n} catch (ClassNotFoundException e) {\n    e.printStackTrace();\n}", "question": "What is ClassNotFoundException in Java, and when is it thrown?" },
                    { "term": "IOException", "explanation": "Signals an I/O error has occurred. It is a checked exception.\nCode sample:\ntry (FileReader reader = new FileReader(\"file.txt\")) {\n    int data = reader.read();\n} catch (IOException e) {\n    e.printStackTrace();\n}", "question": "What is IOException in Java, and how is it handled?" },
                    { "term": "SQLException", "explanation": "Indicates a database access error or other errors related to SQL operations.\nCode sample:\ntry {\n    Connection conn = DriverManager.getConnection(\"url\", \"user\", \"pass\");\n} catch (SQLException e) {\n    e.printStackTrace();\n}", "question": "What is SQLException in Java, and when does it occur?" },
                    { "term": "RemoteException", "explanation": "Thrown during remote method calls when a communication-related issue occurs.\nCode sample:\ntry {\n    RemoteService service = (RemoteService) Naming.lookup(\"rmi://localhost/Service\");\n} catch (RemoteException e) {\n    e.printStackTrace();\n}", "question": "What is RemoteException in Java, and when is it used?" },
                    { "term": "StackOverflowError", "explanation": "Occurs when a stack exceeds its limit, often due to unbounded recursion.\nCode sample:\nclass Demo {\n    void recursive() {\n        recursive();\n    }\n}\nnew Demo().recursive(); // StackOverflowError", "question": "What is StackOverflowError in Java, and how can it occur?" },
                    { "term": "VirtualMachineError", "explanation": "Indicates a serious error in the Java Virtual Machine (JVM) that prevents its operation.\nCode sample:\ntry {\n    // Simulate heavy memory usage\n} catch (VirtualMachineError e) {\n    e.printStackTrace();\n}", "question": "What is VirtualMachineError in Java?" },
                    { "term": "OutOfMemoryError", "explanation": "Thrown when the JVM runs out of memory and cannot allocate objects.\nCode sample:\nList<int[]> list = new ArrayList<>();\nwhile (true) {\n    list.add(new int[Integer.MAX_VALUE]);\n}", "question": "What is OutOfMemoryError in Java, and when does it occur?" },
                    { "term": "ArithmeticException", "explanation": "Thrown when an exceptional arithmetic condition occurs, such as division by zero.\nCode sample:\ntry {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    e.printStackTrace();\n}", "question": "What is ArithmeticException in Java, and how is it handled?" },
                    { "term": "NullPointerException", "explanation": "Occurs when an application attempts to use an object reference that is null.\nCode sample:\nString str = null;\ntry {\n    str.length();\n} catch (NullPointerException e) {\n    e.printStackTrace();\n}", "question": "What is NullPointerException in Java, and how can it be prevented?" },
                    { "term": "NumberFormatException", "explanation": "Thrown when an attempt is made to convert a string into a number of an inappropriate format.\nCode sample:\ntry {\n    int num = Integer.parseInt(\"abc\");\n} catch (NumberFormatException e) {\n    e.printStackTrace();\n}", "question": "What is NumberFormatException in Java, and how can it be handled?" },
                    { "term": "IndexOutOfBoundException", "explanation": "Occurs when trying to access an array or list index that is out of bounds.\nCode sample:\nint[] arr = {1, 2, 3};\ntry {\n    System.out.println(arr[5]);\n} catch (IndexOutOfBoundsException e) {\n    e.printStackTrace();\n}", "question": "What is IndexOutOfBoundException in Java, and how can it be prevented?" },
                    { "term": "Checked vs Unchecked Exception", "explanation": "Checked exceptions must be declared in a method's `throws` clause. Unchecked exceptions (RuntimeExceptions) need not be declared.\nCode sample:\n// Checked Exception\nvoid readFile() throws IOException {}\n// Unchecked Exception\nint divide(int a, int b) { return a / b; }", "question": "What is the difference between checked and unchecked exceptions in Java?" },
                    { "term": "Error", "explanation": "Represents serious problems that applications should not try to catch.\nCode sample:\ntry {\n    // Simulate memory error\n} catch (Error e) {\n    e.printStackTrace();\n}", "question": "What is an Error in Java, and how does it differ from exceptions?" },
                    { "term": "ParseException", "explanation": "Indicates a problem with parsing text into a date or number.\nCode sample:\ntry {\n    SimpleDateFormat sdf = new SimpleDateFormat(\"yyyy-MM-dd\");\n    sdf.parse(\"invalid-date\");\n} catch (ParseException e) {\n    e.printStackTrace();\n}", "question": "What is ParseException in Java, and when is it thrown?" },
                    { "term": "try-catch block", "explanation": "Used to handle exceptions in Java.\nCode sample:\ntry {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    e.printStackTrace();\n}", "question": "How is a try-catch block used in Java?" },
                    { "term": "finally block", "explanation": "Executes code after try-catch, regardless of whether an exception was thrown.\nCode sample:\ntry {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    e.printStackTrace();\n} finally {\n    System.out.println(\"Cleanup code\");\n}", "question": "What is a finally block in Java, and when is it executed?" },
                    { "term": "throw vs throws", "explanation": "`throw` is used to explicitly throw an exception. `throws` is used to declare exceptions in a method.\nCode sample:\nvoid validate(int age) throws IllegalArgumentException {\n    if (age < 18) throw new IllegalArgumentException(\"Invalid age\");\n}", "question": "What is the difference between `throw` and `throws` in Java?" },
                    { "term": "final vs finally vs finalize", "explanation": "`final` is a keyword to declare constants or immutable entities. `finally` is used for cleanup. `finalize` is a method for cleanup before garbage collection.\nCode sample:\nfinal int CONSTANT = 10;\ntry {\n    int result = 10 / 0;\n} finally {\n    System.out.println(\"Cleanup\");\n}\n@Override\nprotected void finalize() { System.out.println(\"Finalized\"); }", "question": "What are the differences between `final`, `finally`, and `finalize` in Java?" },
                    { "term": "exception handling with method overriding", "explanation": "In overriding, the child method can throw the same or fewer checked exceptions than the parent method.\nCode sample:\nclass Parent {\n    void display() throws IOException {}\n}\nclass Child extends Parent {\n    @Override\n    void display() throws FileNotFoundException {}\n}", "question": "How does exception handling work with method overriding in Java?" },
                    { "term": "Java custom exceptions", "explanation": "Custom exceptions are user-defined exceptions extending `Exception` or `RuntimeException`.\nCode sample:\nclass MyException extends Exception {\n    MyException(String message) { super(message); }\n}\nthrow new MyException(\"Custom Error\");", "question": "How are custom exceptions created and used in Java?" }
                ]
            },
            /*
            {
                topicName: "Java Inner Class",
                entries: []
            },
            {
                topicName: "Java Multithreading",
                entries: []
            },
            {
                topicName: "Java Synchronization",
                entries: []
            },
            {
                topicName: "Java Networking",
                entries: []
            },
            {
                topicName: "Java JDBC",
                entries: []
            },
            */
            {
                topicName: "Java collections",
                entries: [
                    { "term": "ArrayList", "explanation": "ArrayList implements the List interface. It is best suited for dynamic arrays where random access is required. It resizes dynamically but performs poorly with frequent insertions or deletions in the middle of the list due to shifting elements.\nMethods: add(E element), add(int index, E element), addAll(Collection<? extends E> c), addAll(int index, Collection<? extends E> c), clear(), contains(Object o), containsAll(Collection<?> c), equals(Object o), get(int index), indexOf(Object o), isEmpty(), iterator(), lastIndexOf(Object o), listIterator(), listIterator(int index), remove(int index), remove(Object o), removeAll(Collection<?> c), retainAll(Collection<?> c), set(int index, E element), size(), subList(int fromIndex, int toIndex), toArray(), toArray(T[] a), forEach(Consumer<? super E> action), sort(Comparator<? super E> c), spliterator(), stream(), parallelStream(), clone()", "question": "What makes ArrayList suitable for random access and dynamic storage in Java?" },
                    { "term": "LinkedList", "explanation": "LinkedList implements both List and Deque interfaces. It is optimal for scenarios requiring frequent insertions or deletions since these operations are efficient at both ends. However, it performs poorly for random access due to its sequential nature.\nMethods: add(E element), add(int index, E element), addAll(Collection<? extends E> c), addAll(int index, Collection<? extends E> c), addFirst(E e), addLast(E e), clear(), contains(Object o), containsAll(Collection<?> c), descendingIterator(), element(), equals(Object o), get(int index), getFirst(), getLast(), indexOf(Object o), isEmpty(), iterator(), lastIndexOf(Object o), listIterator(), listIterator(int index), offer(E e), offerFirst(E e), offerLast(E e), peek(), peekFirst(), peekLast(), poll(), pollFirst(), pollLast(), pop(), push(E e), remove(), remove(int index), remove(Object o), removeFirst(), removeLast(), removeAll(Collection<?> c), retainAll(Collection<?> c), set(int index, E element), size(), spliterator(), subList(int fromIndex, int toIndex), toArray(), toArray(T[] a), forEach(Consumer<? super E> action), sort(Comparator<? super E> c), stream(), parallelStream(), clone()", "question": "What makes LinkedList efficient for frequent insertions and deletions in Java?" },
                    { "term": "Vector", "explanation": "Vector implements the List interface and is synchronized, making it thread-safe. It is suitable for legacy systems requiring thread-safe dynamic arrays. However, its overhead due to synchronization makes it less efficient than ArrayList in single-threaded environments.\nMethods: add(E element), add(int index, E element), addAll(Collection<? extends E> c), addAll(int index, Collection<? extends E> c), addElement(E obj), capacity(), clear(), clone(), contains(Object o), containsAll(Collection<?> c), copyInto(Object[] anArray), elementAt(int index), ensureCapacity(int minCapacity), equals(Object o), firstElement(), forEach(Consumer<? super E> action), get(int index), indexOf(Object o), indexOf(Object o, int index), insertElementAt(E obj, int index), isEmpty(), iterator(), lastElement(), lastIndexOf(Object o), lastIndexOf(Object o, int index), listIterator(), listIterator(int index), remove(int index), remove(Object o), removeAll(Collection<?> c), removeAllElements(), removeElement(Object obj), removeElementAt(int index), retainAll(Collection<?> c), set(int index, E element), setElementAt(E obj, int index), setSize(int newSize), size(), spliterator(), subList(int fromIndex, int toIndex), toArray(), toArray(T[] a), toString(), trimToSize()", "question": "Why is Vector useful in multi-threaded legacy systems, and what are its trade-offs?" },
                    { "term": "HashSet", "explanation": "HashSet implements the Set interface and is backed by a HashMap. It is ideal for storing unique elements and offers constant-time performance for add, remove, and contains operations. It does not maintain insertion order.\nMethods: add(E e), addAll(Collection<? extends E> c), clear(), clone(), contains(Object o), containsAll(Collection<?> c), equals(Object o), forEach(Consumer<? super E> action), isEmpty(), iterator(), remove(Object o), removeAll(Collection<?> c), retainAll(Collection<?> c), size(), spliterator(), stream(), parallelStream(), toArray(), toArray(T[] a)", "question": "Why is HashSet efficient for managing unique elements in Java?" },
                    { "term": "LinkedHashSet", "explanation": "LinkedHashSet implements the Set interface and maintains the insertion order of elements. It is optimal for scenarios where both uniqueness and order preservation are required. Performance is slightly slower than HashSet due to the maintenance of a linked list.\nMethods: add(E e), addAll(Collection<? extends E> c), clear(), clone(), contains(Object o), containsAll(Collection<?> c), equals(Object o), forEach(Consumer<? super E> action), isEmpty(), iterator(), remove(Object o), removeAll(Collection<?> c), retainAll(Collection<?> c), size(), spliterator(), stream(), parallelStream(), toArray(), toArray(T[] a)", "question": "What scenarios require LinkedHashSet's combination of uniqueness and order preservation?" },
                    { "term": "TreeSet", "explanation": "TreeSet implements the NavigableSet interface and uses a Red-Black Tree for storage. It is ideal for sorted sets and allows elements to be retrieved in natural or custom order. It performs poorly compared to HashSet for basic operations.\nMethods: add(E e), addAll(Collection<? extends E> c), ceiling(E e), clear(), comparator(), contains(Object o), descendingIterator(), descendingSet(), equals(Object o), first(), floor(E e), forEach(Consumer<? super E> action), headSet(E toElement), headSet(E toElement, boolean inclusive), higher(E e), isEmpty(), iterator(), last(), lower(E e), pollFirst(), pollLast(), remove(Object o), removeAll(Collection<?> c), retainAll(Collection<?> c), size(), spliterator(), subSet(E fromElement, E toElement), subSet(E fromElement, boolean fromInclusive, E toElement, boolean toInclusive), tailSet(E fromElement), tailSet(E fromElement, boolean inclusive), toArray(), toArray(T[] a), stream(), parallelStream()", "question": "What advantages does TreeSet provide for sorted collections in Java?" },
                    { "term": "HashMap", "explanation": "HashMap implements the Map interface and provides constant-time performance for key-based operations. It is optimal for scenarios requiring fast key-value pair lookups. However, it does not guarantee any specific iteration order.\nMethods: clear(), compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction), computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction), computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction), containsKey(Object key), containsValue(Object value), entrySet(), equals(Object o), forEach(BiConsumer<? super K, ? super V> action), get(Object key), getOrDefault(Object key, V defaultValue), isEmpty(), keySet(), merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction), put(K key, V value), putAll(Map<? extends K, ? extends V> m), putIfAbsent(K key, V value), remove(Object key), remove(Object key, Object value), replace(K key, V value), replace(K key, V oldValue, V newValue), replaceAll(BiFunction<? super K, ? super V, ? extends V> function), size(), values(), clone()", "question": "What makes HashMap a fast and versatile data structure for key-value pairs in Java?" },
                    { "term": "TreeMap", "explanation": "TreeMap implements the NavigableMap interface and stores keys in sorted order using a Red-Black Tree. It is best suited for scenarios where sorted order of keys is required, but it is slower than HashMap for key lookups.\nMethods: ceilingEntry(K key), ceilingKey(K key), clear(), comparator(), compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction), computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction), computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction), containsKey(Object key), containsValue(Object value), descendingKeySet(), descendingMap(), entrySet(), firstEntry(), firstKey(), floorEntry(K key), floorKey(K key), forEach(BiConsumer<? super K, ? super V> action), get(Object key), getOrDefault(Object key, V defaultValue), headMap(K toKey), headMap(K toKey, boolean inclusive), higherEntry(K key), higherKey(K key), isEmpty(), keySet(), lastEntry(), lastKey(), lowerEntry(K key), lowerKey(K key), merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction), navigableKeySet(), pollFirstEntry(), pollLastEntry(), put(K key, V value), putAll(Map<? extends K, ? extends V> m), putIfAbsent(K key, V value), remove(Object key), remove(Object key, Object value), replace(K key, V value), replace(K key, V oldValue, V newValue), replaceAll(BiFunction<? super K, ? super V, ? extends V> function), size(), subMap(K fromKey, K toKey), subMap(K fromKey, boolean fromInclusive, K toKey, boolean toInclusive), tailMap(K fromKey), tailMap(K fromKey, boolean inclusive), values(), clone()", "question": "Why would you use TreeMap for sorted key-value pairs in Java?" },
                    { "term": "LinkedHashMap", "explanation": "LinkedHashMap implements the Map interface and maintains the insertion order of keys. It is ideal for scenarios where order-sensitive key-value pair storage is required. Performance is slightly slower than HashMap.\nMethods: clear(), compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction), computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction), computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction), containsKey(Object key), containsValue(Object value), entrySet(), equals(Object o), forEach(BiConsumer<? super K, ? super V> action), get(Object key), getOrDefault(Object key, V defaultValue), isEmpty(), keySet(), merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction), put(K key, V value), putAll(Map<? extends K, ? extends V> m), putIfAbsent(K key, V value), remove(Object key), remove(Object key, Object value), replace(K key, V value), replace(K key, V oldValue, V newValue), replaceAll(BiFunction<? super K, ? super V, ? extends V> function), size(), values(), clone()", "question": "How does LinkedHashMap ensure both order preservation and efficient key-value pair storage?" },
                    { "term": "PriorityQueue", "explanation": "PriorityQueue implements the Queue interface and is backed by a heap data structure. It is best for priority-based tasks where elements with the highest or lowest priority need to be processed first. It does not allow null elements.\nMethods: add(E e), addAll(Collection<? extends E> c), clear(), comparator(), contains(Object o), forEach(Consumer<? super E> action), isEmpty(), iterator(), offer(E e), peek(), poll(), remove(Object o), removeAll(Collection<?> c), retainAll(Collection<?> c), size(), spliterator(), toArray(), toArray(T[] a), stream(), parallelStream()", "question": "What makes PriorityQueue suitable for priority-based task scheduling in Java?" },
                    { "term": "Deque", "explanation": "Deque is a double-ended queue interface that allows efficient insertion and removal of elements from both ends. It is optimal for scenarios like stacks and queues requiring two-way access.\nMethods: add(E e), addFirst(E e), addLast(E e), clear(), contains(Object o), descendingIterator(), element(), forEach(Consumer<? super E> action), getFirst(), getLast(), isEmpty(), iterator(), offer(E e), offerFirst(E e), offerLast(E e), peek(), peekFirst(), peekLast(), poll(), pollFirst(), pollLast(), pop(), push(E e), remove(), remove(Object o), removeFirst(), removeFirstOccurrence(Object o), removeLast(), removeLastOccurrence(Object o), size(), spliterator(), toArray(), toArray(T[] a), stream(), parallelStream()", "question": "How does Deque facilitate two-way access for queue and stack operations?" },
                    { "term": "ArrayDeque", "explanation": "ArrayDeque implements the Deque interface and provides a resizable array-based implementation. It is best for stack and queue operations with no capacity restrictions and performs better than LinkedList for similar tasks.\nMethods: add(E e), addFirst(E e), addLast(E e), clear(), contains(Object o), descendingIterator(), element(), forEach(Consumer<? super E> action), getFirst(), getLast(), isEmpty(), iterator(), offer(E e), offerFirst(E e), offerLast(E e), peek(), peekFirst(), peekLast(), poll(), pollFirst(), pollLast(), pop(), push(E e), remove(), remove(Object o), removeFirst(), removeFirstOccurrence(Object o), removeLast(), removeLastOccurrence(Object o), size(), spliterator(), toArray(), toArray(T[] a), stream(), parallelStream()", "question": "Why is ArrayDeque the preferred choice for stack and queue operations in Java?" }
                ],
            },
            {
                topicName: "Java Choosing data type and collection",
                entries: [
                    { "term": "Highly optimized storage", "explanation": "Array - A fixed-size collection of elements of the same type, offering fast indexed access and minimal overhead. Ideal for scenarios where the size is known and will not change.", "question": "When should you use an array?" },
                    { "term": "Dynamic list where elements are frequently added or removed", "explanation": "ArrayList - A resizable array implementation that grows dynamically. It provides constant-time positional access but can have slower performance for frequent insertions and deletions.", "question": "When should you use an ArrayList?" },
                    { "term": "List with frequent insertions and deletions at both ends", "explanation": "LinkedList - A doubly-linked list allowing efficient insertions and deletions at both ends and at arbitrary positions. Slower than ArrayList for random access due to sequential traversal.", "question": "When should you use a LinkedList?" },
                    { "term": "Thread-safe dynamic list", "explanation": "Vector - A synchronized resizable array. It is thread-safe but slower than ArrayList due to synchronization overhead.", "question": "When should you use a Vector?" },
                    { "term": "Unique unordered elements with fast access", "explanation": "HashSet - A collection that stores unique elements with constant-time performance for basic operations like add, remove, and contains.", "question": "When should you use a HashSet?" },
                    { "term": "Unique elements with predictable iteration order", "explanation": "LinkedHashSet - Extends HashSet but maintains insertion order, making it suitable for cases where order matters.", "question": "When should you use a LinkedHashSet?" },
                    { "term": "Unique sorted elements", "explanation": "TreeSet - A NavigableSet implementation that stores unique elements in a sorted order defined by their natural order or a custom comparator.", "question": "When should you use a TreeSet?" },
                    { "term": "Key-value pairs with fast access and no ordering", "explanation": "HashMap - A hash table-based implementation of the Map interface, offering constant-time performance for basic operations but without any guarantees of order.", "question": "When should you use a HashMap?" },
                    { "term": "Key-value pairs with sorted keys", "explanation": "TreeMap - A Red-Black tree-based implementation of the Map interface that maintains keys in a sorted order.", "question": "When should you use a TreeMap?" },
                    { "term": "Key-value pairs with insertion-order iteration", "explanation": "LinkedHashMap - Extends HashMap to maintain a predictable iteration order, either by insertion order or access order.", "question": "When should you use a LinkedHashMap?" },
                    { "term": "Priority-based processing of elements", "explanation": "PriorityQueue - A queue implementation where elements are ordered by their natural ordering or a custom comparator, making it suitable for priority-based tasks.", "question": "When should you use a PriorityQueue?" },
                    { "term": "Queue with frequent insertions and deletions at both ends", "explanation": "Deque - A double-ended queue allowing efficient insertions and deletions at both ends. Suitable for stack or queue use cases.", "question": "When should you use a Deque?" },
                    { "term": "Efficient deque implementation with dynamic resizing", "explanation": "ArrayDeque - A resizable array implementation of Deque, providing faster performance than LinkedList for stack and queue operations.", "question": "When should you use an ArrayDeque?" },
                    { "term": "Stack-based Last-In-First-Out (LIFO) processing", "explanation": "Stack - A legacy synchronized class providing LIFO operations. Use ArrayDeque for better performance in modern applications.", "question": "When should you use a Stack?" },
                    { "term": "Set of unique elements with predefined constants", "explanation": "EnumSet - A specialized Set implementation for use with enum types. Offers compact and efficient storage.", "question": "When should you use an EnumSet?" },
                    { "term": "Key-value pairs with predefined constants", "explanation": "EnumMap - A specialized Map implementation for use with enum keys. Offers compact and efficient storage.", "question": "When should you use an EnumMap?" },
                    { "term": "Key-value pairs with fast garbage collection and weak keys", "explanation": "WeakHashMap - A Map implementation where keys are held using weak references, allowing garbage collection when no longer used elsewhere.", "question": "When should you use a WeakHashMap?" },
                    { "term": "Key-value pairs with identity-based equality", "explanation": "IdentityHashMap - A Map implementation that uses reference equality instead of object equality, suitable for specific caching use cases.", "question": "When should you use an IdentityHashMap?" },
                    { "term": "Thread-safe map with high concurrency", "explanation": "ConcurrentHashMap - A thread-safe implementation of Map that allows concurrent reads and updates without blocking.", "question": "When should you use a ConcurrentHashMap?" },
                    { "term": "Thread-safe list with high iteration performance", "explanation": "CopyOnWriteArrayList - A thread-safe list that creates a new copy of the underlying array on every write operation, offering high performance for read-heavy workloads.", "question": "When should you use a CopyOnWriteArrayList?" },
                    { "term": "Thread-safe set with high iteration performance", "explanation": "CopyOnWriteArraySet - A thread-safe set that creates a new copy of the underlying array on every write operation, offering high performance for read-heavy workloads.", "question": "When should you use a CopyOnWriteArraySet?" },
                    { "term": "Thread-safe queue with FIFO order", "explanation": "ConcurrentLinkedQueue - A thread-safe, non-blocking queue based on linked nodes. Ideal for high-performance queue operations.", "question": "When should you use a ConcurrentLinkedQueue?" },
                    { "term": "Thread-safe deque with FIFO and LIFO operations", "explanation": "ConcurrentLinkedDeque - A thread-safe, non-blocking deque based on linked nodes. Supports both FIFO and LIFO operations efficiently.", "question": "When should you use a ConcurrentLinkedDeque?" },
                    { "term": "Thread-safe queue with capacity limits", "explanation": "BlockingQueue - A thread-safe queue that blocks when adding to a full queue or removing from an empty queue. Ideal for producer-consumer scenarios.", "question": "When should you use a BlockingQueue?" },
                    { "term": "Thread-safe deque with capacity limits", "explanation": "BlockingDeque - A thread-safe deque that blocks when adding to a full deque or removing from an empty deque. Supports both ends efficiently.", "question": "When should you use a BlockingDeque?" },
                    { "term": "Blocking queue with FIFO order", "explanation": "LinkedBlockingQueue - A thread-safe, capacity-bound queue using linked nodes with FIFO order. Suitable for high-throughput producer-consumer models.", "question": "When should you use a LinkedBlockingQueue?" },
                    { "term": "Blocking deque with FIFO and LIFO order", "explanation": "LinkedBlockingDeque - A thread-safe, capacity-bound deque using linked nodes. Supports blocking operations at both ends.", "question": "When should you use a LinkedBlockingDeque?" },
                    { "term": "Fixed-capacity blocking queue", "explanation": "ArrayBlockingQueue - A thread-safe, bounded queue backed by an array. Offers predictable capacity with FIFO order.", "question": "When should you use an ArrayBlockingQueue?" },
                    { "term": "Blocking queue with priority-based processing", "explanation": "PriorityBlockingQueue - A thread-safe, unbounded priority queue. Suitable for priority-based task processing.", "question": "When should you use a PriorityBlockingQueue?" },
                    { "term": "Blocking queue with delayed element processing", "explanation": "DelayQueue - A thread-safe, unbounded queue where elements can only be taken when their delay has expired. Suitable for scheduling tasks.", "question": "When should you use a DelayQueue?" },
                    { "term": "Blocking queue with no capacity (handover pattern)", "explanation": "SynchronousQueue - A thread-safe queue that allows one-to-one handoff between threads. Ideal for handoff scenarios with no buffering.", "question": "When should you use a SynchronousQueue?" },
                    { "term": "byte ?", "explanation": "A primitive data type representing an 8-bit signed integer. Suitable for memory-efficient storage of small integer values.", "question": "When should you use byte?" },
                    { "term": "Byte ?", "explanation": "The wrapper class for the primitive type byte. Useful for working with collections or when a nullable type is needed.", "question": "When should you use Byte?" },
                    { "term": "short ?", "explanation": "A primitive data type representing a 16-bit signed integer. Suitable for memory-efficient storage of small integer values larger than byte.", "question": "When should you use short?" },
                    { "term": "Short ?", "explanation": "The wrapper class for the primitive type short. Useful for working with collections or when a nullable type is needed.", "question": "When should you use Short?" },
                    { "term": "int ?", "explanation": "A primitive data type representing a 32-bit signed integer. The default choice for integer values in Java.", "question": "When should you use int?" },
                    { "term": "Integer ?", "explanation": "The wrapper class for the primitive type int. Useful for working with collections or when a nullable type is needed.", "question": "When should you use Integer?" },
                    { "term": "long ?", "explanation": "A primitive data type representing a 64-bit signed integer. Suitable for storing large integer values.", "question": "When should you use long?" },
                    { "term": "Long ?", "explanation": "The wrapper class for the primitive type long. Useful for working with collections or when a nullable type is needed.", "question": "When should you use Long?" },
                    { "term": "float ?", "explanation": "A primitive data type representing a 32-bit floating-point number. Suitable for memory-efficient storage of decimal values with lower precision.", "question": "When should you use float?" },
                    { "term": "Float ?", "explanation": "The wrapper class for the primitive type float. Useful for working with collections or when a nullable type is needed.", "question": "When should you use Float?" },
                    { "term": "double ?", "explanation": "A primitive data type representing a 64-bit floating-point number. The default choice for decimal values in Java, offering higher precision.", "question": "When should you use double?" },
                    { "term": "Double ?", "explanation": "The wrapper class for the primitive type double. Useful for working with collections or when a nullable type is needed.", "question": "When should you use Double?" },
                    { "term": "char ?", "explanation": "A primitive data type representing a single 16-bit Unicode character. Suitable for storing individual characters.", "question": "When should you use char?" },
                    { "term": "Character ?", "explanation": "The wrapper class for the primitive type char. Useful for working with collections or when a nullable type is needed.", "question": "When should you use Character?" },
                    { "term": "boolean ?", "explanation": "A primitive data type representing a logical value: true or false. Suitable for simple flags or conditions.", "question": "When should you use boolean?" },
                    { "term": "Boolean ?", "explanation": "The wrapper class for the primitive type boolean. Useful for working with collections or when a nullable type is needed.", "question": "When should you use Boolean?" }
                ],
            },
            {
                topicName: "Java type casting",
                entries: [
                    { "term": "implicit casting", "explanation": "Implicit casting automatically converts a smaller type to a larger type (e.g., int → double) without the need for explicit syntax. Example: int intValue = 5; double doubleValue = intValue; // Implicit casting", "question": "What is implicit casting, and how does it work?" },
                    { "term": "explicit casting", "explanation": "Explicit casting converts a larger type to a smaller type (e.g., double → int) and requires explicit syntax to avoid precision loss. Example: double doubleValue = 5.7; int intValue = (int) doubleValue; // Explicit casting", "question": "What is explicit casting, and when is it required?" },
                    { "term": "upcasting", "explanation": "Upcasting converts a subclass object to its superclass type automatically, ensuring type safety and allowing polymorphism. Example: class Animal {} class Dog extends Animal {} Animal animal = new Dog(); // Upcasting", "question": "What is upcasting, and why is it useful?" },
                    { "term": "downcasting", "explanation": "Downcasting converts a superclass reference to a subclass type. It requires explicit casting and type checking to ensure correctness. Example: class Animal {} class Dog extends Animal {} Animal animal = new Dog(); Dog dog = (Dog) animal; // Downcasting", "question": "What is downcasting, and how is it performed?" },
                    { "term": "autoboxing", "explanation": "Autoboxing automatically converts a primitive type to its corresponding wrapper object. Example: int primitive = 10; Integer wrapper = primitive; // Autoboxing", "question": "What is autoboxing in Java, and how does it occur?" },
                    { "term": "unboxing", "explanation": "Unboxing automatically converts a wrapper object to its corresponding primitive type. Example: Integer wrapper = 10; int primitive = wrapper; // Unboxing", "question": "What is unboxing in Java, and when does it happen?" }
                ]
            },
            {
                topicName: "Java imports",
                entries: [
                    {
                        "term": "import java.util.*;",
                        "explanation": "Use java.util.* for small projects due to simplicity; use java.util.'specific' for larger projects to prevent namespace conflicts and enhance readability.",
                        "question": "When should you use 'import java.util.*' versus a specific import in Java?"
                    },
                    {
                        "term": "import java.util.logging.Logger;",
                        "explanation": "Allows logging of exceptions and messages for debugging and monitoring.",
                        "question": "Which import is used for logging exceptions in Java?"
                    },
                    {
                        "term": "import java.io.IOException;",
                        "explanation": "Handles input/output exceptions during file or stream operations.",
                        "question": "Which import is required to handle I/O errors in Java?"
                    },
                    {
                        "term": "import java.util.Arrays;",
                        "explanation": "Provides utility methods for manipulating arrays, such as sorting and searching.",
                        "question": "Which import provides utility methods for handling arrays in Java?"
                    },
                    {
                        "term": "import java.util.ArrayList;",
                        "explanation": "Enables the use of dynamic arrays that grow as needed.",
                        "question": "Which import allows the use of dynamic arrays in Java?"
                    },
                    {
                        "term": "import java.util.Random;",
                        "explanation": "Generates random numbers for various applications.",
                        "question": "Which import is used for generating random numbers in Java?"
                    },
                    {
                        "term": "import java.util.HashMap;",
                        "explanation": "Provides a data structure to store key-value pairs with fast lookup.",
                        "question": "Which import is used for storing key-value pairs in Java?"
                    },
                    {
                        "term": "import java.util.HashSet;",
                        "explanation": "Provides a collection for unique elements, with fast operations.",
                        "question": "Which import is used for storing unique elements in Java?"
                    },
                    {
                        "term": "import java.util.Collections;",
                        "explanation": "Provides utility methods for manipulating collections, such as sorting or searching.",
                        "question": "Which import offers utility methods for manipulating collections in Java?"
                    },
                    {
                        "term": "import java.io.File;",
                        "explanation": "Enables file operations like creating, deleting, and reading file metadata.",
                        "question": "Which import allows file operations in Java?"
                    },
                    {
                        "term": "import java.io.*;",
                        "explanation": "Provides classes for file reading and writing operations.",
                        "question": "Which import allows reading from and writing to files in Java?"
                    },
                    {
                        "term": "import java.util.Scanner;",
                        "explanation": "Facilitates reading input from various sources, such as user input.",
                        "question": "Which import is used for reading user input in Java?"
                    },
                    {
                        "term": "import java.time.*;",
                        "explanation": "Provides classes for working with date and time.",
                        "question": "Which import offers classes for handling date and time in Java?"
                    },
                    {
                        "term": "import java.util.concurrent.*;",
                        "explanation": "Facilitates concurrent programming, including multithreading and synchronization.",
                        "question": "Which import is used for concurrency utilities in Java?"
                    },
                    {
                        "term": "import java.util.stream.*;",
                        "explanation": "Provides a modern approach to process collections using streams and functional programming.",
                        "question": "Which import is used for processing collections with streams in Java?"
                    }
                ]
            },
        ],
    },
    {
        category: "Git",
        subcategories: [

            {
                topicName: "Git commands",
                entries: [
                    { "term": "git pull", "explanation": "Combines `git fetch` and `git merge` to download and merge changes from the remote repository.", "question": "How can you download and merge changes from the remote repository?" },
                    { "term": "git push origin <branch-name>", "explanation": "Uploads local commits to the specified branch in the remote repository.", "question": "How do you upload local changes to a specific branch on the remote repository?" },
                    { "term": "git branch -d <branch-name>", "explanation": "Deletes a branch locally, provided it has been fully merged.", "question": "What command is used to delete a branch locally?" },
                    { "term": "git merge <branch-name>", "explanation": "Merges the specified branch into the current branch, combining their histories.", "question": "Which command is used to merge another branch into the current branch?" },
                    { "term": "git checkout -b <branch-name>", "explanation": "Creates a new branch and switches to it in one command.", "question": "What command allows you to create and switch to a new branch?" },
                    { "term": "git checkout <branch-name>", "explanation": "Switches the working directory to the specified branch.", "question": "How can you switch to a different branch in your repository?" },
                    { "term": "git branch <branch-name>", "explanation": "Creates a new branch without switching to it.", "question": "Which command creates a new branch in your repository?" },
                    { "term": "git commit -m 'commit message'", "explanation": "Saves staged changes with a descriptive commit message.", "question": "How can you save staged changes with a descriptive message?" },
                    { "term": "git add <file>", "explanation": "Stages a specific file for the next commit.", "question": "Which command stages a specific file for the next commit?" },
                    { "term": "git add .", "explanation": "Stages all changes in the working directory for the next commit.", "question": "How do you stage all changes in the working directory for the next commit?" },
                    { "term": "git status", "explanation": "Shows the current status of the repository, including staged, unstaged, and untracked files.", "question": "What command shows the current status of your repository, including staged and unstaged changes?" },
                    { "term": "git clone <repository-url>", "explanation": "Creates a local copy of a remote repository, including its commit history.", "question": "How can you create a local copy of a remote repository?" },
                    { "term": "git init", "explanation": "Initializes a new Git repository in the current directory.", "question": "Which command initializes a new Git repository?" },
                    { "term": "git restore <file>", "explanation": "Discards changes in the working directory.", "question": "What command discards changes in the working directory?" },
                    { "term": "git branch -m <branch>", "explanation": "Renames the current branch to the specified name.", "question": "How do you rename the current Git branch?" },
                    { "term": "git branch -a", "explanation": "Lists all branches, including remote branches.", "question": "Which command lists all local and remote Git branches?" },
                    { "term": "git add", "explanation": "Stages changes for the next commit.", "question": "Which command stages changes for the next commit in Git?" },
                    { "term": "git commit", "explanation": "Records staged changes into the repository.", "question": "Which command is used to save staged changes in Git?" },
                    { "term": "git log --oneline", "explanation": "Displays the commit history in a compact format.", "question": "Which command shows Git logs in a single-line format?" },
                    { "term": "git log --graph", "explanation": "Displays the commit history as a graph of branches.", "question": "Which command shows a graphical representation of the commit history in Git?" },
                    { "term": "git diff --staged", "explanation": "Shows changes between the staging area and the last commit.", "question": "Which command shows staged changes compared to the last commit in Git?" },
                    { "term": "git stash apply", "explanation": "Reapplies stashed changes without removing them from the stash.", "question": "Which command reapplies stashed changes in Git?" },
                    { "term": "git stash drop", "explanation": "Removes a stash from the stack.", "question": "Which command deletes a stash in Git?" },
                    { "term": "git remote add", "explanation": "Adds a new remote repository.", "question": "Which command adds a remote repository in Git?" },
                    { "term": "git remote remove", "explanation": "Removes an existing remote repository.", "question": "Which command removes a remote repository in Git?" },
                    { "term": "git push --tags", "explanation": "Pushes all tags to a remote repository.\n- add and push tag on the last commit of a version as a tag is bound to a commit. \n- remove tag with git tag -f", "question": "Which command pushes tags to a remote repository in Git?" },
                    { "term": "git tag", "explanation": "Lists all tags in the current repository.", "question": "Which command lists all tags in a Git repository?" },
                ],
            },
            {
                topicName: "Git commands +",
                entries: [
                    { "term": "git log -p <file>", "explanation": "Displays the commit history of a specific file along with the changes introduced in each commit.", "question": "How can you view the commit history of a specific file, including changes made?" },
                    { "term": "git reset --hard <commit-hash>", "explanation": "Resets the repository to a specific commit, discarding all changes made after that commit.", "question": "Which command resets the repository to a specific commit, discarding changes?" },
                    { "term": "git revert <commit-hash>", "explanation": "Creates a new commit that undoes the changes introduced by a specified commit, preserving history.", "question": "How do you create a new commit that undoes a specific commit?" },
                    { "term": "git rebase", "explanation": "Moves or combines commits into a new base. Use `git rebase -i` for interactive rebasing.", "question": "What command allows you to move or combine commits in Git?" },
                    { "term": "ssh-keygen -t rsa", "explanation": "Generates a new SSH key for Git authentication.", "question": "How do you generate an SSH key for secure Git communication?" },
                    { "term": "ssh-add <path-to-key>", "explanation": "Adds an SSH key to the SSH agent.", "question": "What command adds an SSH key to the SSH agent?" },
                    { "term": "git branch -D <branch>", "explanation": "Forces the deletion of a branch, even if it has unmerged changes.", "question": "Which command forcefully deletes a branch in Git?" },
                    { "term": "git pull --no-rebase origin main", "explanation": "Pulls changes from the 'main' branch without rebasing.", "question": "How do you pull changes without rebasing from a Git repository?" },
                    { "term": "git pull --rebase origin main", "explanation": "Pulls changes from the 'main' branch and rebases the local commits on top of the remote branch.", "question": "How do you pull changes with rebasing from a Git repository?" },
                    { "term": "git pull --ff-only origin main", "explanation": "Pulls changes from the 'main' branch using only fast-forward merges.", "question": "How do you ensure only fast-forward merges when pulling changes in Git?" },
                    { "term": "git config pull.rebase false", "explanation": "Configures the current repository to not rebase on pull by default.", "question": "Which command configures Git to disable rebasing on pull for the current repository?" },
                    { "term": "git config --global pull.rebase false", "explanation": "Globally configures Git to not rebase on pull by default.", "question": "How do you globally configure Git to disable rebasing on pull?" },
                    { "term": "git config pull.rebase true", "explanation": "Configures the current repository to rebase on pull by default.", "question": "Which command configures Git to enable rebasing on pull for the current repository?" },
                    { "term": "git config --global pull.rebase true", "explanation": "Globally configures Git to rebase on pull by default.", "question": "How do you globally configure Git to enable rebasing on pull?" },
                    { "term": "git config pull.ff only", "explanation": "Configures the current repository to allow only fast-forward merges on pull.", "question": "Which command configures Git to allow only fast-forward merges for the current repository?" },
                    { "term": "git config --global pull.ff only", "explanation": "Globally configures Git to allow only fast-forward merges on pull.", "question": "How do you globally configure Git to allow only fast-forward merges?" },
                    { "term": "git config", "explanation": "Configures user-specific settings like username and email in Git.", "question": "Which command configures user-specific settings in Git?" },
                    { "term": "git branch", "explanation": "Lists, creates, or deletes branches in Git.", "question": "Which command is used to manage branches in Git?" },
                    { "term": "git switch", "explanation": "Switches to a different branch in the repository.", "question": "Which command is used to switch between branches in Git?" },
                    { "term": "git merge", "explanation": "Combines changes from one branch into another.", "question": "Which command merges one branch into the current branch in Git?" },
                    { "term": "git push", "explanation": "Uploads local commits to a remote repository.", "question": "Which command pushes local changes to a remote Git repository?" },
                    { "term": "git log", "explanation": "Displays the commit history for the repository.", "question": "Which command displays the commit history in Git?" },
                    { "term": "git diff", "explanation": "Shows differences between files in different states.", "question": "Which command shows changes between files in Git?" },
                    { "term": "git fetch", "explanation": "Downloads changes from a remote repository without merging them.", "question": "Which command fetches changes from a remote repository in Git?" },
                    { "term": "git stash", "explanation": "Temporarily saves changes for later use.", "question": "Which command temporarily saves uncommitted changes in Git?" },
                    { "term": "git restore", "explanation": "Restores changes to files in the working directory.", "question": "Which command restores file changes in Git?" },
                    { "term": "git reset", "explanation": "Resets the current HEAD to a specified state.", "question": "Which command is used to reset the current branch in Git?" },
                    { "term": "git rm", "explanation": "Removes files from the working directory and staging area.", "question": "Which command removes files from Git tracking?" },
                    { "term": "git show", "explanation": "Displays detailed information about an object in the repository.", "question": "Which command displays detailed information about commits or objects in Git?" },
                    { "term": "git blame", "explanation": "Shows which commit last modified each line of a file.", "question": "Which command shows who last modified each line in a file in Git?" },
                    { "term": "git revert", "explanation": "Creates a new commit that undoes the changes of a previous commit.", "question": "Which command undoes changes from a specific commit without removing it?" },
                    { "term": "git commit --amend", "explanation": "Amends the most recent commit with new changes or a new message.", "question": "Which command amends the last commit in Git?" },
                    { "term": "git merge --abort", "explanation": "Aborts a merge in progress and resets the state.", "question": "Which command aborts a merge in Git?" },
                    { "term": "git checkout commit-hash -- file.txt", "explanation": "Restores a specific file from a specific commit.", "question": "How can you restore a file from a specific commit in Git?" },
                    { "term": "git push origin v2.0", "explanation": "Pushes the specified tag (v2.0) to the remote repository.", "question": "How can you push a specific tag to a remote repository in Git?" },
                    { "term": "git tag -a v2.0 -m 'Release version 2.0'", "explanation": "Creates an annotated tag with a message for version 2.0.", "question": "Which command creates an annotated tag with a message in Git?" },
                ],
            },
            {
                topicName: "Git flags",
                entries: [
                    { "term": "--help", "explanation": "Displays help information for a specific Git command.", "question": "Which Git flag shows help information for a command?" },
                    { "term": "--global", "explanation": "Applies a configuration change globally across all repositories for the user.", "question": "Which Git flag applies a configuration setting globally?" },
                    { "term": "--all", "explanation": "Applies an operation to all branches, tags, or relevant items.", "question": "Which Git flag applies an operation to all branches or items?" },
                    { "term": "--force", "explanation": "Forces the operation to be executed, bypassing warnings or checks.", "question": "Which Git flag forces an operation to execute despite warnings?" },
                    { "term": "--quiet", "explanation": "Suppresses output messages from Git commands.", "question": "Which Git flag reduces or suppresses command output?" },
                    { "term": "--verbose", "explanation": "Displays detailed output from Git commands.", "question": "Which Git flag provides more detailed output for commands?" },
                    { "term": "--rebase", "explanation": "Specifies that the operation should use rebase instead of merge.", "question": "Which Git flag enables rebase instead of merge for operations?" },
                    { "term": "--staged", "explanation": "Limits the operation to changes in the staging area only.", "question": "Which Git flag applies changes only to the staging area?" },
                    { "term": "--no-verify", "explanation": "Skips pre-commit and other hooks during Git operations.", "question": "Which Git flag bypasses pre-commit hooks?" },
                    { "term": "--checkout", "explanation": "Applies a stash and checks out files simultaneously.", "question": "Which Git flag applies a stash and checks out files?" },
                    { "term": "--progress", "explanation": "Forces the display of progress information for operations.", "question": "Which Git flag displays progress information during operations?" },
                    { "term": "--single-branch", "explanation": "Clones only the specified branch and no others.", "question": "Which Git flag restricts cloning to a single branch?" },
                    { "term": "--depth", "explanation": "Limits the depth of commit history for cloning or fetching.", "question": "Which Git flag limits the depth of commit history?" },
                    { "term": "--list", "explanation": "Lists configurations or items related to the command.", "question": "Which Git flag lists configurations or relevant items?" },
                    { "term": "--edit", "explanation": "Opens an editor for modifying messages during commands like rebase or commit.", "question": "Which Git flag opens an editor for message modifications?" },
                    { "term": "--untracked-files", "explanation": "Specifies how to handle untracked files during operations like status or stash.", "question": "Which Git flag controls the handling of untracked files?" }
                ]
            },
            {
                topicName: "Git flags +",
                entries: [
                    { "term": "--amend", "explanation": "Amends the most recent commit with new changes or a new message.", "question": "Which Git flag modifies the most recent commit in Git?" },
                    { "term": "--no-ff", "explanation": "Prevents fast-forward merges, creating a merge commit instead.", "question": "Which Git flag disables fast-forward merges?" },
                    { "term": "--ff-only", "explanation": "Allows only fast-forward merges for the operation.", "question": "Which Git flag restricts merges to fast-forward only?" },
                    { "term": "--hard", "explanation": "Resets the repository to a specified state and discards all changes.", "question": "Which Git flag discards all changes during a reset?" },
                    { "term": "--soft", "explanation": "Resets the repository to a specified state but keeps changes staged.", "question": "Which Git flag keeps changes staged during a reset?" },
                    { "term": "--mixed", "explanation": "Resets the repository to a specified state but keeps changes in the working directory.", "question": "Which Git flag keeps changes in the working directory during a reset?" },
                    { "term": "--track", "explanation": "Sets up tracking for a new branch to track a remote branch.", "question": "Which Git flag sets up tracking for a new branch?" },
                    { "term": "--prune", "explanation": "Removes stale remote-tracking branches during fetch or pull.", "question": "Which Git flag cleans up stale branches during fetch or pull?" },
                    { "term": "--detach", "explanation": "Switches the repository to a detached HEAD state.", "question": "Which Git flag enables a detached HEAD state?" },
                    { "term": "--no-edit", "explanation": "Skips editing the commit message during operations like rebase or merge.", "question": "Which Git flag skips editing the commit message?" },
                    { "term": "--dry-run", "explanation": "Simulates the operation without making any changes.", "question": "Which Git flag simulates an operation without executing it?" },
                    { "term": "--keep", "explanation": "Preserves uncommitted changes during a reset.", "question": "Which Git flag preserves uncommitted changes during a reset?" },
                    { "term": "--sparse", "explanation": "Performs operations on a sparse checkout.", "question": "Which Git flag works with sparse checkouts?" },
                    { "term": "--recurse-submodules", "explanation": "Includes submodule operations during the main command.", "question": "Which Git flag includes submodules in Git operations?" },
                    { "term": "--initial", "explanation": "Specifies that the operation is for the initial branch creation.", "question": "Which Git flag specifies the initial branch creation?" },
                    { "term": "--signoff", "explanation": "Adds a 'Signed-off-by' line at the end of the commit message.", "question": "Which Git flag appends a 'Signed-off-by' line to commit messages?" },
                    { "term": "--squash", "explanation": "Combines multiple commits into a single commit during merges.", "question": "Which Git flag combines commits during a merge?" },
                    { "term": "--force-with-lease", "explanation": "Forces an operation but ensures it doesn’t overwrite unexpected changes.", "question": "Which Git flag ensures safe overwriting during forced operations?" },
                    { "term": "--assume-unchanged", "explanation": "Marks a file as unchanged to ignore future changes.", "question": "Which Git flag ignores changes to a specific file?" },
                    { "term": "--no-assume-unchanged", "explanation": "Reverts the effect of '--assume-unchanged'.", "question": "Which Git flag reverts ignoring changes to a file?" },
                    { "term": "--work-tree", "explanation": "Specifies the working tree directory for a repository.", "question": "Which Git flag sets the working tree directory for commands?" }
                ]
            },
            {
                topicName: "Git usecases",
                entries: [
                    { "term": "Switching Between Multiple Repositories", "explanation": "1. cd <repository-folder> (Navigate to the desired repository)\n2. git status (Check the current state of the repository)\n3. Repeat commands as needed for the active repository.", "question": "How do you switch between multiple Git repositories?" },
                    { "term": "Cleaning Up Untracked Files", "explanation": "1. git clean -n (Preview the files that would be deleted)\n2. git clean -f (Remove untracked files).", "question": "How do you clean up untracked files in a Git repository?" },
                    { "term": "Cherry-Picking a Commit", "explanation": "1. git log (Find the commit hash to cherry-pick)\n2. git cherry-pick <commit-hash> (Apply the commit to the current branch).", "question": "What steps are needed to cherry-pick a commit in Git?" },
                    { "term": "Renaming a Branch", "explanation": "1. git branch -m <new-branch-name> (Rename the current branch locally)\n2. git push origin:<old-branch-name> <new-branch-name> (Update the branch on remote)\n3. git push origin -u <new-branch-name> (Set the tracking branch).", "question": "How do you rename a branch locally and on a remote repository?" },
                    { "term": "Tagging a New Release", "explanation": "1. git tag -a v1.0 -m \"Release version 1.0\" (Create an annotated tag)\n2. git push origin v1.0 (Push the tag to the remote).", "question": "How do you tag a new release in Git and push it to the remote repository?" },
                    { "term": "Force Updating Local Branch to Remote", "explanation": "1. git fetch origin (Update local references)\n2. git reset --hard origin/<branch-name> (Reset the local branch to match remote).", "question": "What is the process for force updating a local branch to match a remote branch?" },
                    { "term": "Patching Changes", "explanation": "1. git diff > patch.diff (Create a patch file of differences)\n2. git apply patch.diff (Apply the patch to another branch or repository).", "question": "How do you create and apply a patch in Git?" },
                    { "term": "Recovering Deleted Files", "explanation": "1. git log -- <file-path> (Find the last commit containing the file)\n2. git checkout <commit-hash> -- <file-path> (Recover the deleted file).", "question": "How can you recover deleted files in Git?" },
                    { "term": "Reviewing a Specific File’s History", "explanation": "1. git log -- <file-path> (View commit history for the file)\n2. git blame <file-path> (See who last modified each line).", "question": "What commands allow you to review the history of a specific file in Git?" },
                    { "term": "Setting Up a New Remote Repository", "explanation": "1. git init (Initialize a Git repository)\n2. git remote add origin <repository-url> (Add the remote repository)\n3. git add . (Stage initial files)\n4. git commit -m \"Initial commit\" (Commit the initial changes)\n5. git push -u origin main (Push to the main branch and set tracking).", "question": "How do you set up a new remote Git repository?" },
                    { "term": "Resetting to a Specific Commit", "explanation": "1. git log (Find the commit hash to reset to)\n2. git reset --hard <commit-hash> (Reset the working directory to the specific commit)\n3. git push origin main --force (Push the reset branch to remote).", "question": "What steps are required to reset a branch to a specific commit?" },
                    { "term": "Deleting Remote Branches", "explanation": "1. git branch -d <branch-name> (Delete the local branch if needed)\n2. git push origin --delete <branch-name> (Delete the branch on remote).", "question": "How can you delete remote branches in Git?" },
                    { "term": "Temporary Work Before Switching Branches", "explanation": "1. git stash (Save current changes without committing)\n2. git checkout <branch-name> (Switch to the target branch)\n3. git stash apply (Reapply stashed changes)\n4. git stash drop (Delete the stash).", "question": "What is the process for stashing changes before switching branches in Git?" },
                    { "term": "Squashing Commits Before Pushing", "explanation": "1. git log (Identify the number of commits to squash)\n2. git rebase -i HEAD~<number-of-commits> (Open interactive rebase)\n3. Mark commits as squash or s in the editor, save, and close.\n4. git push origin <branch-name> --force (Push the squashed commits).", "question": "How do you squash commits before pushing in Git?" },
                    { "term": "Reverting a Pushed Commit", "explanation": "1. git log (Identify the commit hash to revert)\n2. git revert <commit-hash> (Create a new commit to undo the changes)\n3. git push origin main (Push the revert commit).", "question": "What steps are required to revert a pushed commit in Git?" },
                    { "term": "Cleaning Up Unused Local Branches", "explanation": "1. git branch --merged (List merged branches)\n2. git branch -d <branch-name> (Delete a local branch)\n3. git fetch --prune (Remove deleted remote branches from local references).", "question": "How do you clean up unused local branches in Git?" },
                    { "term": "Pull Request Workflow", "explanation": "1. git checkout -b feature/<feature-name> (Create a new branch)\n2. git add . (Stage changes)\n3. git commit -m \"Your commit message\" (Commit changes)\n4. git push origin feature/<feature-name> (Push branch to remote)\n5. Open a pull request in the repository.", "question": "What is the Git workflow for creating and submitting a pull request?" },
                    { "term": "Rebasing a Feature Branch", "explanation": "1. git checkout feature/<feature-name> (Switch to the feature branch)\n2. git fetch origin (Update local references)\n3. git rebase origin/main (Reapply your branch commits on top of main)\n4. Resolve any conflicts and use git rebase --continue.\n5. git push origin feature/<feature-name> --force (Push the rebased branch).", "question": "How do you rebase a feature branch in Git?" },
                    { "term": "Undoing Unstaged Changes", "explanation": "1. git restore <file> (Discard changes in a specific file)\n2. git restore . (Discard all unstaged changes).", "question": "What commands are used to undo unstaged changes in Git?" },
                    { "term": "Debugging a Bug (Bisecting)", "explanation": "1. git bisect start (Start the bisect process)\n2. git bisect bad (Mark the current commit as bad)\n3. git bisect good <commit-hash> (Mark a known good commit)\n4. Follow Git’s guidance to check out commits until the bug is identified.\n5. git bisect reset (End the bisect process).", "question": "What is the Git bisect process for debugging a bug?" },
                    { "term": "Rolling Back a Commit", "explanation": "1. git log (Get commit hash to revert)\n2. git revert <commit-hash> (Create a new commit that undoes changes from the specified commit)\n3. git push origin main (Push the revert commit).", "question": "How do you roll back a commit in Git?" },
                    { "term": "Deploying Code", "explanation": "1. git add . (Stage all changes)\n2. git commit -m \"Your commit message\" (Commit changes)\n3. git push origin main (Push changes to the main branch).", "question": "What steps are required to deploy code using Git?" },
                    { "term": "Resolving Merge Conflicts", "explanation": "1. git pull origin <branch-name> (Pull latest changes from remote)\n2. Resolve conflicts manually in files.\n3. git add <file> (Stage resolved files)\n4. git commit -m \"Resolve merge conflicts\" (Commit resolved conflicts)\n5. git push origin <branch-name> (Push the updated branch).", "question": "How do you resolve merge conflicts in Git?" },
                    { "term": "Feature Development in a New Branch", "explanation": "1. git checkout -b feature/<feature-name> (Create and switch to a new branch)\n2. Work on the feature and make changes.\n3. git add . (Stage changes)\n4. git commit -m \"Implement feature <feature-name>\" (Commit changes)\n5. git push origin feature/<feature-name> (Push branch to remote).", "question": "What is the Git process for feature development in a new branch?" },
                    { "term": "Syncing a Forked Repository", "explanation": "1. git remote add upstream <original-repo-url> (Add upstream remote)\n2. git fetch upstream (Fetch updates from the original repository)\n3. git merge upstream/main (Merge updates into your fork)\n4. git push origin main (Push updated code to your fork).", "question": "How do you sync a forked repository with the original repository in Git?" },
                ],
            },
            {
                topicName: "Git Random",
                entries: [
                    { "term": "Stale branches", "explanation": "Branches in a Git repository that haven’t been updated for a long time, typically indicating they are no longer actively developed or maintained.", "question": "What are stale branches in Git?" },
                    { "term": "Tags", "explanation": "References in Git that point to specific commits, commonly used to mark significant points in a repository’s history, such as release versions.", "question": "What are tags in Git and what are they used for?" }
                ],
            },
        ],
    },
    {
        category: "OS",
        subcategories: [
            {
                topicName: "MacOS keys",
                entries: [
                    { "term": "Command-A", "explanation": "Select all.", "question": "Which shortcut selects all items in the current window?" },
                    { "term": "Command-C", "explanation": "Copy.", "question": "What is the shortcut for copying selected items?" },
                    { "term": "Command-D", "explanation": "Duplicate selected item or Bookmark page in Safari.", "question": "What does Command-D do in macOS?" },
                    { "term": "Command-E", "explanation": "Eject.", "question": "Which shortcut ejects a selected disk or volume?" },
                    { "term": "Command-Z", "explanation": "Undo.", "question": "What is the shortcut for undoing the last action?" },
                    { "term": "Command-F", "explanation": "Find in Finder.", "question": "How do you search in Finder using a shortcut?" },
                    { "term": "Command-H", "explanation": "Hide.", "question": "Which shortcut hides the current app's windows?" },
                    { "term": "Command-I", "explanation": "Show Info.", "question": "What does Command-I do in macOS?" },
                    { "term": "Command-J", "explanation": "View Options.", "question": "What shortcut opens the View Options dialog?" },
                    { "term": "Command-K", "explanation": "Connect to Server.", "question": "Which shortcut connects to a server in Finder?" },
                    { "term": "Command-L", "explanation": "Create an alias.", "question": "How can you create an alias in macOS?" },
                    { "term": "Command-M", "explanation": "Minimize Window.", "question": "What shortcut minimizes the current window?" },
                    { "term": "Command-N", "explanation": "Open a new Finder Window or New Document.", "question": "Which shortcut opens a new Finder window or creates a new document?" },
                    { "term": "Command-O", "explanation": "Open.", "question": "What does Command-O do in macOS?" },
                    { "term": "Command-P", "explanation": "Print.", "question": "Which shortcut prints the current document or page?" },
                    { "term": "Command-Q", "explanation": "Quit an app.", "question": "What shortcut quits the active application?" },
                    { "term": "Command-R", "explanation": "Reload page or Rotate image.", "question": "What does Command-R do in macOS?" },
                    { "term": "Command-S", "explanation": "Save.", "question": "How do you save a file using a shortcut?" },
                    { "term": "Command-T", "explanation": "Open a new tab.", "question": "Which shortcut opens a new tab in Finder or browsers?" },
                    { "term": "Command-Y", "explanation": "Quick Look.", "question": "What is the shortcut for previewing a file with Quick Look?" },
                    { "term": "Command-V", "explanation": "Paste.", "question": "What shortcut pastes copied or cut content?" },
                    { "term": "Command-W", "explanation": "Close Window.", "question": "Which shortcut closes the current window?" },
                    { "term": "Command-X", "explanation": "Cut.", "question": "What shortcut cuts the selected content?" },
                    { "term": "Shift-Command-Q", "explanation": "Log out of macOS user account.", "question": "How do you log out of your macOS user account using a shortcut?" },
                    { "term": "Shift-Command-C", "explanation": "Open the Computer window.", "question": "Which shortcut opens the Computer window in Finder?" },
                    { "term": "Shift-Command-D", "explanation": "Open the desktop folder.", "question": "What shortcut opens the desktop folder in Finder?" },
                    { "term": "Shift-Command-F", "explanation": "Open the Recents window.", "question": "Which shortcut opens the Recents window in Finder?" },
                    { "term": "Shift-Command-G", "explanation": "Open a Go to Folder window.", "question": "How do you open a Go to Folder window using a shortcut?" },
                    { "term": "Shift-Command-H", "explanation": "Open the Home folder.", "question": "Which shortcut opens the Home folder in Finder?" },
                    { "term": "Option-Shift-Command-Delete", "explanation": "Empty the Trash without confirmation.", "question": "What shortcut empties the Trash without confirmation in macOS?" }
                ],
            },

            {
                "topicName": "sudo",
                "entries": [
                    {
                        "term": "sudo reboot",
                        "explanation": "Restarts the system immediately.",
                        "question": "What command restarts the system immediately?"
                    },
                    {
                        "term": "sudo shutdown -h now",
                        "explanation": "Shuts down the system immediately.",
                        "question": "What command shuts down the system immediately?"
                    },
                    {
                        "term": "sudo softwareupdate -i -a",
                        "explanation": "Installs all available macOS updates.",
                        "question": "How do you install all available macOS updates?"
                    },
                    {
                        "term": "sudo dscacheutil -flushcache",
                        "explanation": "Clears the DNS cache on macOS.",
                        "question": "What command clears the DNS cache on macOS?"
                    },
                    {
                        "term": "sudo ifconfig en0 down/up",
                        "explanation": "Disables/enables a network interface (e.g., Wi-Fi or Ethernet).",
                        "question": "Which command disables or enables a network interface on macOS?"
                    },
                    {
                        "term": "sudo spctl --master-disable",
                        "explanation": "Disables Gatekeeper to allow apps from any source.",
                        "question": "Which command disables Gatekeeper to allow apps from any source?"
                    },
                    {
                        "term": "sudo brew install <package>",
                        "explanation": "Installs software via Homebrew with superuser privileges.",
                        "question": "How do you install a Homebrew package with superuser privileges?"
                    },
                    {
                        "term": "sudo installer -pkg <file>.pkg -target /",
                        "explanation": "Installs a .pkg file on macOS.",
                        "question": "What command installs a .pkg file on macOS?"
                    },
                    {
                        "term": "sudo diskutil list",
                        "explanation": "Lists all disks and partitions on macOS.",
                        "question": "Which command lists all disks and partitions on macOS?"
                    },
                    {
                        "term": "sudo fsck -fy",
                        "explanation": "Checks and repairs the file system.",
                        "question": "What command checks and repairs the file system on macOS?"
                    }
                ]
            },

            {
                "topicName": "Shell",
                "entries": [
                    { "term": "ls", "explanation": "Lists files in the current directory.", "question": "How do you list files in the current directory?" },
                    { "term": "cd <directory>", "explanation": "Navigates to a different directory.", "question": "What command allows you to navigate to a different directory?" },
                    { "term": "pwd", "explanation": "Displays the full path of the current working directory.", "question": "How can you view the full path of the current working directory?" },
                    { "term": "mkdir", "explanation": "Creates a new directory.", "question": "Which command creates a new directory?" },
                    { "term": "rm", "explanation": "Deletes files or directories.", "question": "What command is used to delete files or directories?" },
                    { "term": "cp", "explanation": "Copies files or directories to a specified location.", "question": "Which command copies files or directories to a specified location?" },
                    { "term": "mv", "explanation": "Moves or renames a file or directory.", "question": "What command is used to move or rename a file or directory?" },
                    { "term": "touch", "explanation": "Creates an empty file in the current directory.", "question": "How do you create an empty file in the current directory?" },
                    { "term": "clear", "explanation": "Clears the terminal screen.", "question": "What command clears the terminal screen?" },
                    { "term": "echo -n password | base64", "explanation": "Encodes a string using Base64.", "question": "Which command encodes a string using Base64?" },
                    { "term": "base64 -D", "explanation": "Decodes a Base64-encoded string.", "question": "What command decodes a Base64-encoded string?" }
                ]
            },
            {
                "topicName": "Bash",
                "entries": [
                    { "term": "sudo", "explanation": "Executes tasks with superuser privileges.", "question": "What command is used to execute tasks with superuser privileges?" },
                    { "term": "sudo lsof -i :portnr", "explanation": "Checks what process is running on a specific port.", "question": "How do you check what process is running on a specific port?" },
                    { "term": "kill -9 PID", "explanation": "Stops a process running on a specific port.", "question": "How do you stop a process running on a specific port?" },
                    { "term": "kill <PID>", "explanation": "Terminates a process using its process ID.", "question": "What command terminates a process using its process ID?" },
                    { "term": "ps aux", "explanation": "Lists all running processes on the system.", "question": "Which command lists all running processes on the system?" },
                    { "term": "chmod <permissions> <file>", "explanation": "Modifies the permissions of a file.", "question": "Which command modifies the permissions of a file?" },
                    { "term": "chown", "explanation": "Changes the ownership of a file or directory.", "question": "How do you change the ownership of a file or directory?" },
                    { "term": "defaults", "explanation": "Accesses or modifies user defaults.", "question": "Which command is used to access or modify user defaults?" },
                    { "term": "open", "explanation": "Opens a file or application from the terminal.", "question": "What command opens a file or application from the terminal?" },
                    { "term": "ping <hostname or IP>", "explanation": "Tests network connectivity to a specific host.", "question": "What command tests network connectivity to a specific host?" },
                    { "term": "curl -O <url>", "explanation": "Downloads a file from a URL using curl.", "question": "How do you download a file from a URL using curl?" },
                    { "term": "curl -I <url>", "explanation": "Retrieves only the HTTP headers of a URL using curl.", "question": "What curl command retrieves only the HTTP headers of a URL?" },
                    { "term": "wget <url>", "explanation": "Downloads files from the internet to your system.", "question": "Which command downloads files from the internet to your system?" },
                    { "term": "ifconfig (or ip a)", "explanation": "Displays network interface configurations.", "question": "What command displays network interface configurations?" },
                    { "term": "ssh user@<hostname>", "explanation": "Starts a remote shell session with another host.", "question": "Which command starts a remote shell session with another host?" },
                    { "term": "netstat -tuln", "explanation": "Lists active network connections.", "question": "What command lists active network connections?" },
                    { "term": "traceroute <hostname>", "explanation": "Traces the route packets take to a host.", "question": "How can you trace the route packets take to a host?" },
                    { "term": "nslookup <hostname>", "explanation": "Performs a DNS lookup for a given hostname.", "question": "What command performs a DNS lookup for a given hostname?" },
                    { "term": "ss -t", "explanation": "Displays active TCP connections on your system.", "question": "How do you display active TCP connections on your system?" }
                ]
            },
            {
                "topicName": "Kernel",
                "entries": [
                    { "term": "uname -a", "explanation": "Displays detailed system information, including the kernel version.", "question": "How can you view detailed system information, including the kernel version?" },
                    { "term": "dmesg", "explanation": "Displays kernel-related messages.", "question": "Which command displays kernel-related messages?" },
                    { "term": "df -h", "explanation": "Shows the disk usage of your system in a human-readable format.", "question": "How can you view the disk usage of your system in a human-readable format?" },
                    { "term": "free -h", "explanation": "Displays memory usage in a human-readable format.", "question": "Which command displays memory usage in a human-readable format?" },
                    { "term": "top", "explanation": "Monitors system processes and resource usage interactively.", "question": "How can you monitor system processes and resource usage interactively?" },
                    { "term": "vm_stat", "explanation": "Provides information about memory usage on your system.", "question": "What command provides information about memory usage on your system?" }
                ]
            },


            {
                topicName: "Linux Commands",
                entries: [
                    // repeated commands of shell are removed from the linux collection.
                    { "term": "mkdir <directory-name>", "explanation": "Create a new directory.", "question": "How do you create a new directory?" },
                    { "term": "rm <file-name>", "explanation": "Remove a file.", "question": "What command is used to delete a file?" },
                    { "term": "rm -r <directory-name>", "explanation": "Remove a directory recursively.", "question": "Which command removes a directory and its contents?" },
                    { "term": "cp <source> <destination>", "explanation": "Copy a file.", "question": "How do you copy a file to another location?" },
                    { "term": "mv <source> <destination>", "explanation": "Move or rename a file or directory.", "question": "What command moves or renames a file or directory?" },
                    { "term": "find <path> -name <name>", "explanation": "Search for a file or directory.", "question": "How do you locate a file or directory by name?" },
                    { "term": "cat <file-name>", "explanation": "Display file content.", "question": "Which command outputs the contents of a file?" },
                    { "term": "less <file-name>", "explanation": "Display file content with paging.", "question": "What command shows file content one page at a time?" },
                    { "term": "touch <file-name>", "explanation": "Create an empty file.", "question": "How do you create an empty file in the current directory?" },
                    { "term": "ps", "explanation": "Display running processes.", "question": "Which command lists active processes?" },
                    { "term": "grep '<pattern>' <file>", "explanation": "Search for a string in files.", "question": "How do you search for a specific string within a file?" },
                    { "term": "ifconfig (deprecated, use ip a)", "explanation": "Show network configuration.", "question": "What command displays network configurations?" },
                    { "term": "route -n", "explanation": "Show routing table.", "question": "Which command shows the routing table for your network?" },
                    { "term": "ping <host-name>", "explanation": "Ping a host.", "question": "How do you test network connectivity to a specific host?" },
                    { "term": "wget <URL>", "explanation": "Download files from a URL.", "question": "Which command downloads files from the internet?" },
                    { "term": "curl <URL>", "explanation": "Transfer data from or to a URL.", "question": "How do you transfer data from or to a URL using curl?" },
                    { "term": "sudo su", "explanation": "Switch to superuser mode.", "question": "What command grants superuser privileges?" },
                    { "term": "chown <owner>:<group> <file>", "explanation": "Change file ownership.", "question": "How do you change the owner and group of a file?" },
                    { "term": "gzip <file>", "explanation": "Compress a file with gzip.", "question": "What command compresses a file using gzip?" },
                    { "term": "tar -xvzf <file.tar.gz>", "explanation": "Extract a tarball (tar.gz).", "question": "How do you extract a tar.gz file?" },
                    { "term": "tar -cvzf <file.tar.gz> <directory>", "explanation": "Create a tarball (tar.gz).", "question": "What command creates a compressed tar.gz file?" },
                    { "term": "uptime", "explanation": "Check system uptime.", "question": "How do you check the system's uptime?" },
                    { "term": "reboot", "explanation": "Reboot the system.", "question": "Which command restarts the system?" },
                    { "term": "shutdown now", "explanation": "Shutdown the system.", "question": "What command shuts down the system immediately?" }
                ],
            },
        ],
    },

    {
        category: "Overview",
        subcategories: [
            {
                topicName: "Command Line Utilities",
                entries: [
                    { "term": "mvn:", "explanation": "To manage Java projects with Maven.", "question": "Which tool is commonly used to manage and build Java projects?" },
                    { "term": "ng:", "explanation": "To manage and build Angular projects.", "question": "Which CLI tool is commonly used to create, build, and serve Angular projects?" },
                    { "term": "npm:", "explanation": "To manage JavaScript packages and dependencies.", "question": "What is the default package manager for Node.js?" },
                    { "term": "gradle:", "explanation": "To build and manage software projects, often Java-based.", "question": "Which build tool is known for its flexibility and often used for Java projects?" },
                    { "term": "pip:", "explanation": "To manage Python packages and libraries.", "question": "What tool is used to install and manage Python packages?" },
                    { "term": "composer:", "explanation": "To manage PHP project dependencies.", "question": "Which tool is used to manage dependencies in PHP projects?" },
                    { "term": "gem:", "explanation": "To manage Ruby packages (gems).", "question": "What is the name of the tool for managing Ruby libraries?" },
                    { "term": "yarn:", "explanation": "To manage JavaScript dependencies, similar to npm.", "question": "What is an alternative package manager to npm for JavaScript?" },
                    { "term": "cargo:", "explanation": "To manage Rust packages and projects.", "question": "Which tool is used to manage Rust projects and dependencies?" },
                    { "term": "go:", "explanation": "To manage Go modules and dependencies.", "question": "What tool is used to manage Go modules and packages?" },
                    { "term": "brew:", "explanation": "To manage software packages on macOS.", "question": "What is the popular package manager for macOS?" },
                    { "term": "docker:", "explanation": "To manage containerized applications.", "question": "Which tool is used to create, deploy, and manage containers?" },
                    { "term": "kubectl:", "explanation": "To manage Kubernetes clusters and resources.", "question": "What command-line tool is used to interact with Kubernetes clusters?" },
                    { "term": "terraform:", "explanation": "To manage infrastructure as code across clouds.", "question": "Which tool is used for managing infrastructure as code across different cloud platforms?" },
                    { "term": "ansible:", "explanation": "To automate IT tasks and manage configurations.", "question": "What tool is commonly used for IT automation and configuration management?" },
                    { "term": "vagrant:", "explanation": "To manage virtual development environments.", "question": "Which tool is used to manage virtual environments for development?" },
                    { "term": "make:", "explanation": "To automate build processes in software development.", "question": "Which classic tool automates build processes based on Makefiles?" },
                    { "term": "npx:", "explanation": "To run Node.js packages without installing them globally.", "question": "Which Node.js tool lets you run packages without global installation?" },
                    { "term": "git:", "explanation": "To manage version control for source code.", "question": "What tool is widely used for version control in software development?" },
                    { "term": "ssh:", "explanation": "To connect securely to remote systems.", "question": "What protocol is used for securely connecting to remote machines?" },
                    { "term": "curl:", "explanation": "To transfer data from or to a server using various protocols.", "question": "Which command-line tool is used to transfer data from or to servers?" },
                    { "term": "wget:", "explanation": "To download files from the web (alternative to curl).", "question": "What tool is commonly used to download files from the web?" },
                    { "term": "zsh/bash:", "explanation": "Shells for interacting with the operating system.", "question": "What are examples of popular command-line shells?" },
                    { "term": "rsync:", "explanation": "To synchronize files between systems.", "question": "Which tool is used to sync files across systems or directories?" },
                    { "term": "ffmpeg:", "explanation": "To manipulate and convert multimedia files (audio/video).", "question": "What tool is used to process and convert audio/video files?" },
                    { "term": "tmux:", "explanation": "To manage terminal sessions and split panes.", "question": "Which tool helps manage multiple terminal sessions?" },
                    { "term": "htop:", "explanation": "To monitor system resource usage interactively.", "question": "What is a popular tool for interactively monitoring system resources?" },
                    { "term": "jq:", "explanation": "To parse and manipulate JSON data from the command line.", "question": "Which command-line tool is used to process JSON data?" },
                    { "term": "aws/az/gcloud:", "explanation": "CLI tools for managing AWS, Azure, and Google Cloud resources.", "question": "What are examples of CLI tools for managing cloud resources on AWS, Azure, and Google Cloud?" },
                    { "term": "python/node/ruby:", "explanation": "Interpreters for running respective programming languages directly.", "question": "Which interpreters are used to run Python, Node.js, or Ruby code?" }
                ],
            },
        ],
    },

    {
        category: "Random",
        subcategories: [
            {
                // This collection contains all yet unallocated terms. 
                // As term must be unique are duplicates allways to be deleted in "Random".
                topicName: "Random-topics",
                entries: [
                    { "term": "IaaS: Infrastructure as a Service", "explanation": "Cloud computing model providing virtualized computing resources.", "question": "What is IaaS and what does it provide?" },
                    { "term": "DNSSEC: Domain Name System Security Extensions", "explanation": "Security protocols for DNS that protect against threats like spoofing.", "question": "What is DNSSEC and what problem does it solve?" },
                    { "term": "JSONP: JSON with Padding", "explanation": "A technique for requesting JSON data via script tags to enable cross-domain requests.", "question": "What is JSONP and how is it used?" },
                    { "term": "FTP: File Transfer Protocol", "explanation": "Protocol for transferring files over the internet between client and server.", "question": "What is FTP used for?" },
                    { "term": "SSH: Secure Shell", "explanation": "Protocol for secure remote access and command execution on a computer.", "question": "What is SSH and its primary use?" },
                    { "term": "YAML: Yet Another Markup Language", "explanation": "A human-readable data serialization format commonly used for configuration files.", "question": "What is YAML and where is it used?" },
                    { "term": "KPI: Key Performance Indicator", "explanation": "A measurable value indicating the performance or success of an activity or organization.", "question": "What does KPI stand for, and what does it measure?" },
                    { "term": "ETL: Extract, Transform, Load", "explanation": "Process for extracting data, transforming it into a suitable format, and loading it into a target system.", "question": "What is ETL and why is it used in data integration?" },
                    { "term": "VPN: Virtual Private Network", "explanation": "A secure tunnel for transmitting data over the internet, often used for remote access.", "question": "What is a VPN and why is it important?" },
                    { "term": "JWT: JSON Web Token", "explanation": "A compact token format used for securely transmitting information between parties.", "question": "What is JWT and how is it used?" },
                    { "term": "DNS: Domain Name System", "explanation": "A hierarchical system that resolves domain names to IP addresses.", "question": "What does DNS do in networking?" },
                    { "term": "TTL: Time to Live", "explanation": "Specifies the lifespan of data in a network or cache before being discarded.", "question": "What is TTL and where is it applied?" },
                    { "term": "NAS: Network Attached Storage", "explanation": "File storage accessible over a network, providing centralized data storage.", "question": "What is NAS and its primary function?" },
                    { "term": "RAID: Redundant Array of Independent Disks", "explanation": "Technology for data redundancy and performance improvement by combining multiple drives.", "question": "What is RAID and how is it beneficial?" },
                    { "term": "RPA: Robotic Process Automation", "explanation": "Technology for automating repetitive tasks using software bots.", "question": "What is RPA and its use case?" },
                    { "term": "DRM: Digital Rights Management", "explanation": "Technology for protecting copyrighted digital content from unauthorized use.", "question": "What is DRM and what does it protect?" },
                    { "term": "CAPTCHA: Completely Automated Public Turing Test to Tell Computers and Humans Apart", "explanation": "Tool for distinguishing between human and automated interactions.", "question": "What is CAPTCHA and its purpose?" },
                    { "term": "SDK: Software Development Kit", "explanation": "A set of tools for building software applications.", "question": "What does an SDK provide to developers?" },
                    { "term": "TLD: Top-Level Domain", "explanation": "The highest level in the domain name hierarchy, such as .com or .org.", "question": "What is a TLD in the domain name system?" },
                    { "term": "CI: Continuous Integration", "explanation": "The practice of automating code integration to detect issues early.", "question": "What is Continuous Integration and why is it important?" },
                    { "term": "CD: Continuous Delivery", "explanation": "The practice of automating software deployment to production environments.", "question": "What is Continuous Delivery and its purpose?" },
                    { "term": "ACID: Atomicity, Consistency, Isolation, Durability", "explanation": "Set of properties that ensure reliable database transactions.", "question": "What are the ACID properties in databases?" },
                    { "term": "SOAP: Simple Object Access Protocol", "explanation": "A protocol for exchanging structured information in web services.", "question": "What is SOAP and where is it used?" },
                    { "term": "IMAP: Internet Message Access Protocol", "explanation": "Protocol for accessing and managing email on a server.", "question": "What is IMAP and how does it function?" },
                    { "term": "SMTP: Simple Mail Transfer Protocol", "explanation": "Protocol for sending email messages between servers.", "question": "What does SMTP do in email communication?" },
                    { "term": "POP3: Post Office Protocol 3", "explanation": "Protocol for retrieving email from a server to a client.", "question": "What is the function of POP3?" },
                    { "term": "MQTT: Message Queuing Telemetry Transport", "explanation": "Lightweight messaging protocol often used in IoT devices.", "question": "What is MQTT and where is it applied?" },
                    { "term": "ICMP: Internet Control Message Protocol", "explanation": "Protocol used for error reporting and network diagnostics.", "question": "What is ICMP used for in networking?" },
                    { "term": "RDP: Remote Desktop Protocol", "explanation": "Protocol for accessing and managing a computer's desktop remotely.", "question": "What is RDP and how is it utilized?" },
                    { "term": "WAF: Web Application Firewall", "explanation": "A security measure for protecting web applications from threats.", "question": "What is a WAF and its role in cybersecurity?" },
                    { "term": "TLS: Transport Layer Security", "explanation": "Cryptographic protocol for securing communications over a network.", "question": "What is TLS and why is it used?" },
                    { "term": "FIFO: First In, First Out", "explanation": "Data processing principle where the first element is processed first.", "question": "What does FIFO represent in data processing?" },
                    { "term": "LIFO: Last In, First Out", "explanation": "Data processing principle where the last element is processed first.", "question": "What does LIFO mean in data processing?" },
                    { "term": "CRUD: Create, Read, Update, Delete", "explanation": "Basic database operations for managing records.", "question": "What does CRUD stand for in database operations?" },
                    { "term": "BIOS: Basic Input/Output System", "explanation": "Firmware that initializes and tests hardware during boot-up.", "question": "What is BIOS and its purpose?" },
                    { "term": "POST: Power-On Self-Test", "explanation": "Diagnostic testing sequence performed during boot-up.", "question": "What does POST verify during boot-up?" },
                    { "term": "LAN: Local Area Network", "explanation": "A network within a limited area, such as a home or office.", "question": "What is a LAN and where is it used?" },
                    { "term": "WAN: Wide Area Network", "explanation": "A network spanning a large geographic area, such as a city or country.", "question": "What is WAN and how is it different from LAN?" },
                    { "term": "MAN: Metropolitan Area Network", "explanation": "A network covering a city or large campus, larger than LAN but smaller than WAN.", "question": "What is MAN and how does it differ from LAN and WAN?" },
                    { "term": "MAC: Media Access Control", "explanation": "A unique identifier for network interfaces.", "question": "What does a MAC address represent?" },
                    { "term": "NIC: Network Interface Card", "explanation": "Hardware component that connects a device to a network.", "question": "What is a NIC and its function in networking?" },
                    { "term": "IPSec: Internet Protocol Security", "explanation": "Protocol suite for securing internet communication.", "question": "What is IPSec and its role in secure communications?" },
                    { "term": "VoIP: Voice over Internet Protocol", "explanation": "Technology for transmitting voice over IP networks.", "question": "What is VoIP and how is it used?" },
                    { "term": "NAT: Network Address Translation", "explanation": "Method to map private IP addresses to a public one.", "question": "What is NAT and why is it used in networking?" },
                    { "term": "HTTP/2: Hypertext Transfer Protocol/2", "explanation": "Updated version of HTTP for faster and more efficient web communication.", "question": "What is HTTP/2 and how does it improve over HTTP/1?" },
                    { "term": "PKI: Public Key Infrastructure", "explanation": "Framework for managing digital keys and certificates, providing secure communication and data exchange.", "question": "What is PKI and how does it support secure communications?" },
                    { "term": "RTO: Recovery Time Objective", "explanation": "Target time for recovering IT services after a disruption to minimize downtime.", "question": "What is RTO and why is it important in disaster recovery?" },
                    { "term": "RPO: Recovery Point Objective", "explanation": "Maximum tolerable data loss during a disruption, indicating the acceptable data recovery window.", "question": "What is RPO and its role in business continuity planning?" },
                    { "term": "SDN: Software-Defined Networking", "explanation": "Approach to networking that uses software for centralized management and control of network resources.", "question": "What is SDN and how does it differ from traditional networking?" },
                    { "term": "VLAN: Virtual Local Area Network", "explanation": "Logical grouping of devices on a network, enabling segmentation for security and performance.", "question": "What is a VLAN and its purpose in network management?" },
                    { "term": "HTML5", "explanation": "Latest version of Hypertext Markup Language, used for structuring and presenting web content.", "question": "What is HTML5 and its significance in web development?" },
                    { "term": "CSS3", "explanation": "Latest version of Cascading Style Sheets, used for designing the layout and appearance of web pages.", "question": "What is CSS3 and how does it enhance web design?" },
                    { "term": "SVG: Scalable Vector Graphics", "explanation": "XML-based vector image format for creating graphics that scale without loss of quality.", "question": "What is SVG and how is it used in web graphics?" },
                    { "term": "PNG: Portable Network Graphics", "explanation": "Raster image file format with lossless compression, ideal for web graphics and transparency.", "question": "What is PNG and its advantages in image compression?" },
                    { "term": "JPEG: Joint Photographic Experts Group", "explanation": "Popular compressed image format commonly used for photographs and web graphics.", "question": "What is JPEG and why is it widely used?" },
                    { "term": "WebP", "explanation": "Image format developed by Google offering high compression and quality for web images.", "question": "What is WebP and how does it benefit web optimization?" },
                    { "term": "CI Pipeline: Continuous Integration Pipeline", "explanation": "Automated process for building, testing, and deploying code to streamline development workflows.", "question": "What is a CI pipeline and its purpose in software development?" },
                    { "term": "Load Balancer", "explanation": "Distributes network traffic across multiple servers to ensure availability and reliability.", "question": "What is a load balancer and why is it important in distributed systems?" },
                    { "term": "Reverse Proxy", "explanation": "Server that directs client requests to backend servers for load distribution and security.", "question": "What is a reverse proxy and how does it function in network architecture?" },
                    { "term": "TLS Handshake", "explanation": "Process of establishing a secure connection between a client and server using cryptographic protocols.", "question": "What is a TLS handshake and how does it secure communication?" },
                    { "term": "Cache Miss", "explanation": "Occurs when requested data is not found in the cache and must be retrieved from the source.", "question": "What is a cache miss and its impact on performance?" },
                    { "term": "Cache Hit", "explanation": "Occurs when requested data is successfully retrieved from the cache, improving speed.", "question": "What is a cache hit and why is it important in caching systems?" },
                    { "term": "HTTP Status Code", "explanation": "Numeric codes indicating the result of an HTTP request, such as success or error.", "question": "What are HTTP status codes and their purpose in web communication?" },
                    { "term": "RSA: Rivest-Shamir-Adleman", "explanation": "Algorithm for public-key cryptography, widely used for secure data transmission.", "question": "What is RSA and its role in cryptography?" },
                    { "term": "AES: Advanced Encryption Standard", "explanation": "Symmetric encryption algorithm used for secure data encryption.", "question": "What is AES and why is it widely used?" },
                    { "term": "CSRF: Cross-Site Request Forgery", "explanation": "Web security vulnerability where unauthorized commands are transmitted by a trusted user.", "question": "What is CSRF and how can it be mitigated?" },
                    { "term": "XSS: Cross-Site Scripting", "explanation": "Code injection attack that exploits vulnerabilities in web applications to execute malicious scripts.", "question": "What is XSS and its impact on web security?" },
                    { "term": "SQL Injection", "explanation": "Attack that exploits vulnerabilities in SQL queries to execute arbitrary commands on a database.", "question": "What is SQL Injection and how does it compromise databases?" },
                    { "term": "DDoS: Distributed Denial of Service", "explanation": "Attack that overwhelms a target with traffic to disrupt service availability.", "question": "What is a DDoS attack and its effect on systems?" },
                    { "term": "Zero-Day", "explanation": "Vulnerability that is exploited before it has been discovered or patched.", "question": "What is a zero-day vulnerability?" },
                    { "term": "OAuth: Open Authorization", "explanation": "Protocol for secure delegated access, allowing users to grant access without sharing credentials.", "question": "What is OAuth and how does it enable secure delegated access?" },
                    { "term": "SAML: Security Assertion Markup Language", "explanation": "Protocol for single sign-on authentication and secure identity exchange.", "question": "What is SAML and its use in authentication?" },
                    { "term": "IAM: Identity and Access Management", "explanation": "Framework for managing user access and permissions across systems.", "question": "What is IAM and its role in security?" },
                    { "term": "SIEM: Security Information and Event Management", "explanation": "System for analyzing and managing security data to detect threats.", "question": "What is SIEM and how does it help in threat detection?" },
                    { "term": "IDS: Intrusion Detection System", "explanation": "Monitors network or system activity for malicious behavior.", "question": "What is IDS and how does it function?" },
                    { "term": "IPS: Intrusion Prevention System", "explanation": "Actively prevents malicious activity on a network by blocking threats.", "question": "What is IPS and how does it enhance network security?" },
                    { "term": "MITM: Man-in-the-Middle", "explanation": "Attack where communication between two parties is intercepted and potentially altered.", "question": "What is a MITM attack and its impact on communication?" },
                    { "term": "SMTP Relay", "explanation": "Server used to forward email messages between different mail servers or domains.", "question": "What is an SMTP relay and its role in email communication?" },
                    { "term": "FQDN: Fully Qualified Domain Name", "explanation": "Complete domain name including hostname and domain, uniquely identifying a resource on the internet.", "question": "What is an FQDN and how is it used in DNS?" },
                    { "term": "A Record", "explanation": "DNS record that maps a domain name to an IPv4 address.", "question": "What is an A record in DNS and its purpose?" },
                    { "term": "CNAME: Canonical Name", "explanation": "DNS record that maps an alias domain name to a canonical (true) domain name.", "question": "What is a CNAME record in DNS and its functionality?" },
                    { "term": "MX Record: Mail Exchange", "explanation": "DNS record specifying the mail servers responsible for receiving emails for a domain.", "question": "What is an MX record and its role in email delivery?" },
                    { "term": "TXT Record: Text Record", "explanation": "DNS record for storing arbitrary text data, often used for SPF, DKIM, or verification purposes.", "question": "What is a TXT record in DNS and its common uses?" },
                    { "term": "CI/CD: Continuous Integration and Continuous Deployment", "explanation": "Automation framework for building, testing, and deploying software efficiently and reliably.", "question": "What does CI/CD stand for and how is it applied in DevOps?" },
                    { "term": "Kubernetes", "explanation": "Open-source platform for automating deployment, scaling, and management of containerized applications.", "question": "What is Kubernetes and its role in container orchestration?" },
                    { "term": "Docker", "explanation": "Platform for developing, shipping, and running applications in lightweight containers.", "question": "What is Docker and how is it used in application development?" },
                    { "term": "Helm", "explanation": "Package manager for Kubernetes, simplifying deployment and management of applications.", "question": "What is Helm and how does it assist Kubernetes users?" },
                    { "term": "Terraform", "explanation": "Infrastructure as Code (IaC) tool for automating the provisioning and management of cloud infrastructure.", "question": "What is Terraform and its use in cloud automation?" },
                    { "term": "Ansible", "explanation": "Automation tool for configuration management, application deployment, and orchestration.", "question": "What is Ansible and how is it used in IT automation?" },
                    { "term": "Chef", "explanation": "Configuration management tool for automating infrastructure provisioning and management.", "question": "What is Chef and its role in configuration management?" },
                    { "term": "Puppet", "explanation": "Automation tool for managing infrastructure as code, ensuring consistent configurations.", "question": "What is Puppet and how is it used in DevOps?" },
                    { "term": "Jenkins", "explanation": "Open-source automation server for building, testing, and deploying CI/CD workflows.", "question": "What is Jenkins and its significance in CI/CD pipelines?" },
                    { "term": "GitOps", "explanation": "Approach to continuous delivery using Git as the single source of truth for infrastructure and deployments.", "question": "What is GitOps and how does it integrate with DevOps practices?" },
                    { "term": "FaaS: Function as a Service", "explanation": "Serverless computing model where functions run on-demand without managing servers.", "question": "What is FaaS and how does it simplify serverless execution?" },
                    { "term": "IAC: Infrastructure as Code", "explanation": "Practice of managing and provisioning infrastructure through code, enabling automation and consistency.", "question": "What is Infrastructure as Code and its benefits in cloud management?" },
                    { "term": "CloudFormation", "explanation": "AWS service for defining infrastructure as code, allowing you to model and provision resources with templates.", "question": "What is AWS CloudFormation and its purpose in infrastructure management?" },
                    { "term": "ARM Templates", "explanation": "Azure Resource Manager Templates for defining and deploying Azure resources as infrastructure as code.", "question": "What are ARM Templates and how are they used in Azure?" },
                    { "term": "EC2: Elastic Compute Cloud", "explanation": "AWS service providing resizable virtual servers for scalable computing capacity.", "question": "What is Amazon EC2 and its role in cloud computing?" },
                    { "term": "S3: Simple Storage Service", "explanation": "AWS service for scalable object storage with high availability and durability.", "question": "What is Amazon S3 and its primary use case?" },
                    { "term": "RDS: Relational Database Service", "explanation": "AWS service for managed relational databases, supporting multiple database engines.", "question": "What is Amazon RDS and its functionality?" },
                    { "term": "EKS: Elastic Kubernetes Service", "explanation": "AWS managed Kubernetes service for deploying, managing, and scaling containerized applications.", "question": "What is Amazon EKS and its role in container orchestration?" },
                    { "term": "AKS: Azure Kubernetes Service", "explanation": "Azure managed Kubernetes service for automating deployment and scaling of containerized applications.", "question": "What is Azure Kubernetes Service (AKS) and its purpose?" },
                    { "term": "VPC: Virtual Private Cloud", "explanation": "AWS service providing an isolated network environment in the cloud.", "question": "What is Amazon VPC and its purpose in cloud networking?" },
                    { "term": "SQS: Simple Queue Service", "explanation": "AWS message queuing service for decoupled and scalable systems.", "question": "What is Amazon SQS and its primary use?" },
                    { "term": "SNS: Simple Notification Service", "explanation": "AWS service for sending notifications to subscribers via multiple protocols.", "question": "What is Amazon SNS and its role in messaging?" },
                    { "term": "Lambda", "explanation": "AWS serverless compute service for running code without provisioning or managing servers.", "question": "What is AWS Lambda and its use case in serverless computing?" },
                    { "term": "CloudWatch", "explanation": "AWS monitoring and logging service for tracking resource usage and application performance.", "question": "What is Amazon CloudWatch and its functionality?" },
                    { "term": "Elastic Beanstalk", "explanation": "AWS PaaS service for deploying and managing web applications with minimal infrastructure management.", "question": "What is AWS Elastic Beanstalk and its use case?" },
                    { "term": "CloudFront", "explanation": "AWS Content Delivery Network (CDN) for delivering content globally with low latency and high transfer speed.", "question": "What is AWS CloudFront and its role in content delivery?" },
                    { "term": "Azure DevOps", "explanation": "Microsoft service for version control, CI/CD, and project management, integrating tools for software development and deployment.", "question": "What is Azure DevOps and its purpose?" },
                    { "term": "Azure Functions", "explanation": "Azure's serverless compute service for running code on demand without provisioning infrastructure.", "question": "What are Azure Functions and their use case in serverless computing?" },
                    { "term": "Azure Monitor", "explanation": "Tool for monitoring applications and infrastructure in Azure, providing insights into performance and availability.", "question": "What is Azure Monitor and how is it used?" },
                    { "term": "CloudTrail", "explanation": "AWS service for logging and monitoring account activity, providing governance, compliance, and auditing capabilities.", "question": "What is AWS CloudTrail and its functionality?" },
                    { "term": "Elasticache", "explanation": "AWS service for in-memory data caching with Redis or Memcached, enabling low-latency and high-throughput data access.", "question": "What is Amazon ElastiCache and its primary use case?" },
                    { "term": "CloudShell", "explanation": "Browser-based command-line tool for managing cloud services without requiring local installations.", "question": "What is AWS CloudShell and its purpose?" },
                    { "term": "KMS: Key Management Service", "explanation": "Cloud service for managing cryptographic keys and securing sensitive data.", "question": "What is AWS Key Management Service (KMS) and its purpose?" },
                    { "term": "EBS: Elastic Block Store", "explanation": "AWS block storage for use with EC2 instances, providing scalable and high-performance storage.", "question": "What is Amazon EBS and its functionality?" },
                    { "term": "AZ: Availability Zone", "explanation": "Isolated data center within a cloud region, designed for high availability and fault tolerance.", "question": "What is an Availability Zone (AZ) in cloud computing?" },
                    { "term": "DevSecOps", "explanation": "Practice of integrating security practices into DevOps workflows, ensuring secure software delivery.", "question": "What is DevSecOps and its role in software development?" },
                    { "term": "SLI: Service Level Indicator", "explanation": "Metric indicating the performance or reliability of a service.", "question": "What is a Service Level Indicator (SLI) in service monitoring?" },
                    { "term": "SLO: Service Level Objective", "explanation": "Target value or range for an SLI, defining acceptable service performance levels.", "question": "What is a Service Level Objective (SLO) and its significance?" },
                    { "term": "SLA: Service Level Agreement", "explanation": "Formal commitment between provider and user, outlining service performance expectations.", "question": "What is a Service Level Agreement (SLA) and why is it important?" },
                ]
            },
        ],
    },
]

// aditional topics: Linux keys, git concepts, 


/* Angular
{
        topicName: "Angular Random",
        entries: [
            { "term": "Component", "explanation": "The building block of an Angular application. It controls a view and defines its behavior and template.", "question": "What is the fundamental building block of an Angular application that controls a view?" },
            { "term": "Module", "explanation": "A container for a cohesive block of code, including components, directives, pipes, and services. The root module is AppModule.", "question": "What is the Angular feature that organizes related code into cohesive blocks?" },
            { "term": "Template", "explanation": "The HTML associated with a component. It defines what the user sees in the browser.", "question": "What defines the user interface in an Angular component?" },
            { "term": "Directive", "explanation": "A class that can manipulate the DOM. Types include structural (e.g., *ngIf) and attribute (e.g., ngClass).", "question": "Which Angular feature is used to manipulate the DOM, including structural and attribute types?" },
            { "term": "Interpolation", "explanation": "Binds a property from the component to the template using {{propertyName}}.", "question": "How can you bind a component property to a template in Angular?" },
            { "term": "Property Binding", "explanation": "Binds a property from the component to an element in the DOM using [property].", "question": "Which data binding technique binds a component property to a DOM element?" },
            { "term": "Event Binding", "explanation": "Allows the template to listen for events from the DOM using (event).", "question": "How do you enable the template to listen for DOM events in Angular?" },
            { "term": "Two-Way Binding", "explanation": "Combines property and event binding using [()], typically with ngModel.", "question": "Which data binding technique in Angular combines property and event binding?" },
            { "term": "Service", "explanation": "A class with logic that can be shared across components. Services are registered and provided via dependency injection.", "question": "What is the shared class in Angular that provides logic across components?" },
            { "term": "Injector", "explanation": "The mechanism Angular uses to provide an instance of a service to components and other services.", "question": "What mechanism does Angular use to provide services to components and other services?" },
            { "term": "Provider", "explanation": "Configures how a service is created and injected into Angular components.", "question": "Which Angular feature configures the creation and injection of services?" },
            { "term": "@Input", "explanation": "A decorator to pass data from a parent to a child component.", "question": "What Angular decorator is used to pass data from a parent to a child component?" },
            { "term": "@Output", "explanation": "A decorator to emit events from a child component to a parent using EventEmitter.", "question": "Which decorator in Angular is used for child-to-parent communication via events?" },
            { "term": "ngOnInit", "explanation": "Lifecycle hook invoked once the component is initialized.", "question": "Which lifecycle hook is called after Angular initializes a component?" },
            { "term": "ngOnChanges", "explanation": "Lifecycle hook called whenever an input property changes.", "question": "What lifecycle hook in Angular responds to changes in input properties?" },
            { "term": "ngOnDestroy", "explanation": "Lifecycle hook invoked just before the component is destroyed.", "question": "Which lifecycle hook is used to clean up before a component is destroyed?" },
            { "term": "RouterModule", "explanation": "Angular’s routing library for defining and managing application routes.", "question": "What Angular library is used to define and manage application routes?" },
            { "term": "RouterOutlet", "explanation": "A placeholder in the template for the router to render a component.", "question": "What feature in Angular serves as a placeholder for routed components?" },
            { "term": "ActivatedRoute", "explanation": "Provides information about the current route, including route parameters.", "question": "Which Angular feature provides details about the current route and its parameters?" },
            { "term": "Template-Driven Forms", "explanation": "Forms where the logic is defined in the template with directives like ngModel.", "question": "Which type of Angular form relies on template directives for logic?" },
            { "term": "Reactive Forms", "explanation": "Forms defined in the component class using FormControl and FormGroup.", "question": "What type of Angular form is defined using FormControl and FormGroup in the component?" },
            { "term": "Validators", "explanation": "Functions that perform validation logic, such as Validators.required.", "question": "Which Angular feature is used to perform validation logic on forms?" },
            { "term": "Observable", "explanation": "A stream of asynchronous data that can be subscribed to.", "question": "What is the Angular feature that provides a stream of asynchronous data?" },
            { "term": "Subject", "explanation": "A special type of Observable that acts as both an observer and an observable.", "question": "Which type of Observable in Angular can act as both an observer and an observable?" },
            { "term": "Pipe", "explanation": "Transforms data in the template, such as uppercase or date.", "question": "What Angular feature is used to transform data in a template?" },
            { "term": "Custom Pipe", "explanation": "A user-defined transformation applied in the template.", "question": "Which type of Angular pipe is created by the user to define custom transformations?" },
            { "term": "Folder Structure", "explanation": "Organize files by feature modules or components for scalability.", "question": "What is the recommended practice for organizing files in an Angular project?" },
            { "term": "Lazy Loading", "explanation": "Load feature modules only when needed to improve performance.", "question": "Which Angular practice improves performance by loading feature modules on demand?" },
            { "term": "polyfills.ts", "explanation": "Contains standard code for browser compatibility, enabling Angular applications to run smoothly on various browsers. Example: import 'zone.js';", "question": "What is the purpose of polyfills.ts in an Angular application?" },
            { "term": "environments folder", "explanation": "Holds the application’s settings for different environments, such as production and development setups. Example: environment.ts (development) and environment.prod.ts (production).", "question": "What is stored in the environments folder in an Angular project?" },
            { "term": "main.ts", "explanation": "Contains the startup code for bootstrapping the Angular application. Example: platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));", "question": "What is the role of the main.ts file in an Angular project?" },
            { "term": "index.html", "explanation": "Defines the base HTML structure of the application. Contains the root element where Angular will bootstrap the application. Example: <body><app-root></app-root></body>", "question": "What is the purpose of the index.html file in an Angular application?" },
            { "term": "styles.css", "explanation": "Defines global styles for the application, affecting all components unless overridden. Example: body { font-family: Arial, sans-serif; }", "question": "What is the role of the styles.css file in an Angular project?" },
            { "term": "app folder", "explanation": "Contains the core Angular application code, including components, modules, services, and routing logic. Example: app.component.ts, app.module.ts.", "question": "What does the app folder contain in an Angular project?" },
        ]
    },
    {
        topicName: "Angular Components",
        entries: [
            { "term": "Nested Components", "explanation": "Nested components are Angular components placed within other components to create reusable and modular UI structures. Example: <parent-component><child-component></child-component></parent-component>", "question": "What are nested components in Angular, and how are they used?" },
            { "term": "Content Projection", "explanation": "Content projection is a technique in Angular to include external content (from the consumer of the component) into a specific area of the component template while maintaining layout and styles. Example: <app-card><h1>Title</h1><p>Body content goes here</p></app-card>", "question": "What is content projection in Angular, and how is it implemented?" },
            { "term": "Multi-slot Content Projection", "explanation": "Angular allows multiple sections of content to be projected into different parts of the template, known as multi-slot content projection. This is achieved using <ng-content> with select attributes. Example: <ng-content select=\"[slot1]\"></ng-content><ng-content select=\"[slot2]\"></ng-content>", "question": "What is multi-slot content projection in Angular, and how is it achieved?" },
            { "term": "ngProjectAs", "explanation": "The ngProjectAs attribute is used in Angular to project content in complex scenarios, such as when using ng-container to structure templates without rendering itself. Example: <ng-container ngProjectAs=\"[slot1]\"><div>Content for slot 1</div></ng-container>", "question": "What is `ngProjectAs` in Angular, and when is it used?" },
            { "term": "Conditional Content Projection", "explanation": "Conditional content projection in Angular involves using structural directives like *ngIf to conditionally display projected content based on logic. Example: <ng-content *ngIf=\"showContent\"></ng-content>", "question": "How is conditional content projection achieved in Angular?" },
            { "term": "Dynamic Components", "explanation": "Dynamic components in Angular are components created at runtime instead of being statically declared in the template. This is achieved using ComponentFactoryResolver or Angular's CDK. Example: const factory = this.resolver.resolveComponentFactory(MyComponent); const componentRef = this.viewContainerRef.createComponent(factory);", "question": "What are dynamic components in Angular, and how are they created?" },
            { "term": "Custom Components", "explanation": "Custom components in Angular are user-defined components created to encapsulate logic, templates, and styles. They are declared using the @Component decorator. Example: @Component({selector: 'app-custom',template: `<h1>Hello, custom component!</h1>`}) export class CustomComponent {}", "question": "What are custom components in Angular, and how are they created?" },
            { "term": "Angular Elements", "explanation": "Angular Elements allow Angular components to be packaged as custom elements (web components) that can be used in non-Angular environments. Example: import { createCustomElement } from '@angular/elements'; const element = createCustomElement(AppComponent, { injector }); customElements.define('app-element', element);", "question": "What are Angular Elements, and how are they used?" },
            { "term": "Parent Pass Data to Child with @Input", "explanation": "Data is passed from a parent component to a child component using the @Input decorator in Angular. Example: <child-component [data]=\"parentData\"></child-component> \n In Child: @Input() data: string;", "question": "How does a parent component pass data to a child in Angular?" },
            { "term": "ngOnChanges Hook", "explanation": "The ngOnChanges lifecycle hook in Angular detects changes to @Input properties in a child component and responds to them. Example: ngOnChanges(changes: SimpleChanges) { console.log(changes); }", "question": "What is the ngOnChanges hook in Angular, and when is it triggered?" },
            { "term": "Child Pass Data to Parent with @Output", "explanation": "A child component sends data to a parent using the @Output decorator and EventEmitter. Example: @Output() notify = new EventEmitter<string>(); \n this.notify.emit('Child data'); \n In Parent: <child-component (notify)=\"handleData($event)\"></child-component>", "question": "How does a child component send data to a parent in Angular?" },
            { "term": "Parent Manipulates Child Using Local Variable", "explanation": "A parent component can directly access a child component by assigning it to a local variable in the template. Example: <child-component #childRef></child-component> \n In Parent: @ViewChild('childRef') childComponent: ChildComponent;", "question": "How can a parent component manipulate a child using a local variable in Angular?" },
            { "term": "Parent Manipulates Child Using @ViewChild Decorator", "explanation": "The @ViewChild decorator allows a parent component to query and manipulate a child component in Angular. Example: @ViewChild(ChildComponent) childComponent: ChildComponent; \n this.childComponent.someMethod();", "question": "What is the purpose of the @ViewChild decorator in Angular?" },
            { "term": "Parent and Child Use the Same Service for API Call", "explanation": "Both parent and child components can share a service to perform API calls. This ensures reusability and consistency. Example: constructor(private apiService: ApiService) { this.apiService.getData(); }", "question": "How can parent and child components share a service for API calls in Angular?" },
            { "term": "Parent and Child Use the Same Service Utility Functions", "explanation": "A shared service in Angular can provide utility functions for both parent and child components. Example: this.utilityService.calculateSomething(data);", "question": "How can utility functions in a service be shared between parent and child components in Angular?" },
            { "term": "Parent and Child Use Same Service for Sharing Data", "explanation": "Parent and child components can share data through a common service using a Subject or BehaviorSubject for reactive state management. Example: this.dataService.sharedData.next('new data'); \n In Subscriber: this.dataService.sharedData.subscribe(data => console.log(data));", "question": "How can parent and child components share data using a service in Angular?" },
            { "term": "ngAfterContentInit()", "explanation": "Lifecycle hook called after Angular projects external content into the component's view. Example: ngAfterContentInit() { console.log('Content Initialized'); }", "question": "When is the ngAfterContentInit lifecycle hook triggered in Angular?" },
            { "term": "ngAfterContentChecked()", "explanation": "Lifecycle hook called after Angular checks the projected content for changes. Example: ngAfterContentChecked() { console.log('Content Checked'); }", "question": "What is the purpose of the ngAfterContentChecked lifecycle hook in Angular?" },
            { "term": "ngAfterViewInit()", "explanation": "Lifecycle hook called after Angular initializes the component's view and child views. Example: ngAfterViewInit() { console.log('View Initialized'); }", "question": "When is the ngAfterViewInit lifecycle hook triggered in Angular?" },
            { "term": "ngAfterViewChecked()", "explanation": "Lifecycle hook called after Angular checks the component's view and child views. Example: ngAfterViewChecked() { console.log('View Checked'); }", "question": "What does the ngAfterViewChecked lifecycle hook do in Angular?" },
            { "term": "ngOnDestroy()", "explanation": "Lifecycle hook called before Angular destroys the component. Used for cleanup tasks like unsubscribing from Observables. Example: ngOnDestroy() { this.subscription.unsubscribe(); }", "question": "When should the ngOnDestroy lifecycle hook be used in Angular?" },
            { "term": "ViewEncapsulation.None", "explanation": "No encapsulation; styles are applied globally and affect all components. Example: @Component({ selector: 'app-example', encapsulation: ViewEncapsulation.None, styleUrls: ['./example.component.css'] })", "question": "What happens when ViewEncapsulation.None is used in Angular?" },
            { "term": "ViewEncapsulation.Emulated", "explanation": "Default encapsulation; styles are scoped to the component. Example: @Component({ selector: 'app-example', encapsulation: ViewEncapsulation.Emulated, styleUrls: ['./example.component.css'] })", "question": "How does ViewEncapsulation.Emulated safeguard styles in Angular?" },
            { "term": "ViewEncapsulation.ShadowDom", "explanation": "Uses native Shadow DOM for encapsulation; isolates styles completely. Example: @Component({ selector: 'app-example', encapsulation: ViewEncapsulation.ShadowDom, styleUrls: ['./example.component.css'] })", "question": "What are the benefits of using ViewEncapsulation.ShadowDom in Angular?" },
            { "term": "Parent Pass Data to Child with Auto Interception", "explanation": "Parent passes data to child through @Input with automatic property changes handling. Example: @Input() set data(value: string) { this._data = value; }", "question": "How does a parent pass data to a child with auto interception in Angular?" },
            { "term": "Parent Pass Data to Child with Setter Interception", "explanation": "Parent passes data to child using @Input with setter logic for custom handling. Example: @Input() set data(value: string) { this._data = value.toUpperCase(); }", "question": "How can a parent pass data to a child with setter interception in Angular?" },
            { "term": "@Component selector", "explanation": "Specifies the CSS selector for the component, used to identify the component in the DOM. Example: @Component({ selector: 'app-example', templateUrl: './example.component.html', styleUrls: ['./example.component.css'] })", "question": "What is the purpose of the @Component selector in Angular?" },
            { "term": "@Component templateUrl", "explanation": "Specifies the HTML file that contains the component's template. Example: @Component({ selector: 'app-example', templateUrl: './example.component.html', styleUrls: ['./example.component.css'] })", "question": "How does the @Component templateUrl work in Angular?" },
            { "term": "@Component styleUrls", "explanation": "Specifies the CSS file(s) that define styles for the component. Example: @Component({ selector: 'app-example', templateUrl: './example.component.html', styleUrls: ['./example.component.css'] })", "question": "What does the @Component styleUrls property do in Angular?" },
            { "term": "x.component.css", "explanation": "Contains CSS rules for the component, scoped by Angular's ViewEncapsulation to avoid affecting other components unless explicitly configured otherwise. Example: .example { color: blue; }", "question": "What is the purpose of x.component.css in an Angular component?" },
            { "term": "x.component.html", "explanation": "Defines the structure and layout of the component, containing Angular's template syntax (e.g., {{}} for data binding, *ngFor, *ngIf, and (click) for event binding). Example: <div *ngIf=\"isVisible\">{{ message }}</div>", "question": "What role does x.component.html play in Angular components?" },
            { "term": "x.component.spec.ts", "explanation": "Contains unit tests for the component, written in Jasmine and executed by Karma. Verifies functionality, behavior, and edge cases for code reliability. Example: it('should display the correct message', () => { expect(component.message).toBe('Hello World'); });", "question": "What is the purpose of x.component.spec.ts in Angular?" },
            { "term": "x.component.ts", "explanation": "Defines the logic and metadata for the component, including state, interactions, and behavior. Decorated with @Component to provide metadata like selector, templateUrl, and styleUrls. Example: export class ExampleComponent { message = 'Hello World'; }", "question": "What is the role of x.component.ts in Angular components?" },
            { "term": "ngOnChanges()", "explanation": "Lifecycle hook called when any data-bound property of a directive changes. Useful for reacting to changes in @Input properties. Example: ngOnChanges(changes: SimpleChanges) { console.log(changes); }", "question": "When is the ngOnChanges lifecycle hook used in Angular?" },
            { "term": "ngOnInit()", "explanation": "Lifecycle hook called once the component has been initialized. Ideal for initialization logic, like setting up data or subscriptions. Example: ngOnInit() { this.loadData(); }", "question": "What is the purpose of the ngOnInit lifecycle hook in Angular?" },
            { "term": "ngDoCheck()", "explanation": "Lifecycle hook called for every change detection run, allowing custom change detection logic. Example: ngDoCheck() { console.log('Change detected'); }", "question": "What is the ngDoCheck lifecycle hook used for in Angular?" },
        ]
    },
    {
        topicName: "Angular Commands",
        entries: [
            { "term": "ng serve", "explanation": "Starts the Angular application in development mode with live reloading. Default port is 4200. Example: Run `ng serve` in the terminal and access the app at http://localhost:4200.", "question": "Which command is used to start the Angular development server?" },
            { "term": "ng generate component <component-name>", "explanation": "Creates a new Angular component with the specified name. Example: `ng generate component newComponentName` generates a folder with component files.", "question": "How can you generate a new component in Angular?" },
            { "term": "ng generate module <module-name>", "explanation": "Creates a new Angular module with the specified name. Example: `ng generate module newModuleName`.", "question": "Which command is used to create a new Angular module?" },
            { "term": "ng generate service <service-name>", "explanation": "Creates a new Angular service with the specified name. Example: `ng generate service newServiceName`.", "question": "How do you generate a new service in Angular?" },
            { "term": "ng generate directive <directive-name>", "explanation": "Creates a new Angular directive. Example: `ng generate directive highlight` creates a new directive called highlight.", "question": "Which command generates a new directive in Angular?" },
            { "term": "ng build", "explanation": "Builds the Angular application for production or development. Example: `ng build --prod` generates a production-ready build in the dist/ folder.", "question": "Which command builds the Angular application for production?" },
            { "term": "ng test", "explanation": "Runs unit tests in an Angular application using Karma. Example: `ng test` starts the Karma test runner.", "question": "How can you execute unit tests in an Angular project?" },
            { "term": "ng lint", "explanation": "Checks the Angular project for linting errors using the defined rules. Example: `ng lint` provides a report of style and syntax errors.", "question": "Which command is used for linting an Angular application?" },
            { "term": "ng add <library-name>", "explanation": "Adds a library or package to the Angular project. Example: `ng add @angular/material` installs and configures Angular Material.", "question": "How can you add a library to an Angular project?" },
            { "term": "ng update", "explanation": "Updates Angular core libraries and dependencies to their latest compatible versions. Example: `ng update @angular/core @angular/cli`.", "question": "Which command updates Angular libraries to the latest versions?" },
            { "term": "ng e2e", "explanation": "Runs end-to-end tests for the Angular application using a specified testing framework. Example: `ng e2e` executes tests configured in the project.", "question": "How do you execute end-to-end tests in Angular?" },
            { "term": "ng generate pipe <pipe-name>", "explanation": "Creates a new Angular pipe with the specified name. Example: `ng generate pipe dateFormat`.", "question": "How can you generate a new pipe in Angular?" },
            { "term": "ng generate guard <guard-name>", "explanation": "Creates a new Angular route guard. Example: `ng generate guard authGuard`.", "question": "Which command generates a new route guard in Angular?" },
            { "term": "ng generate class <class-name>", "explanation": "Creates a new TypeScript class. Example: `ng generate class userModel`.", "question": "How can you generate a new TypeScript class in Angular?" },
            { "term": "ng version", "explanation": "Displays the Angular CLI version and project details. Example: `ng version` shows Angular CLI, Angular core, and Node.js versions.", "question": "Which command shows the Angular CLI version?" },
            { "term": "ng config", "explanation": "Sets or retrieves configuration values in the Angular workspace. Example: `ng config schematics.@schematics/angular:component.style scss`.", "question": "How can you set or retrieve Angular CLI configuration settings?" },
            { "term": "ng xi18n", "explanation": "Extracts internationalization (i18n) messages from templates and code. Example: `ng xi18n --output-path src/locale`.", "question": "Which command extracts i18n messages in Angular?" },
        ]
    },


    {
            topicName: "PowerShell",
            entries: [
                { "term": "Get-ChildItem", "explanation": "List files and directories in the current location.", "question": "What command lists files and directories in the current location?" },
                { "term": "Copy-Item", "explanation": "Copy files or directories.", "question": "Which command copies files or directories in PowerShell?" },
                { "term": "Move-Item", "explanation": "Move or rename files or directories.", "question": "What command moves or renames files or directories in PowerShell?" },
                { "term": "Remove-Item", "explanation": "Delete files or directories.", "question": "How do you delete files or directories using PowerShell?" },
                { "term": "Get-Process", "explanation": "List running processes.", "question": "Which command lists all running processes in PowerShell?" },
                { "term": "Get-Service", "explanation": "List installed services.", "question": "What command lists all installed services in PowerShell?" },
                { "term": "Get-WmiObject", "explanation": "Retrieve system information using Windows Management Instrumentation (WMI).", "question": "How can you retrieve system information using WMI in PowerShell?" },
                { "term": "Get-LocalUser", "explanation": "List local users.", "question": "What command lists all local users in PowerShell?" },
                { "term": "New-LocalUser", "explanation": "Create a new local user.", "question": "How do you create a new local user in PowerShell?" },
                { "term": "Add-LocalGroupMember", "explanation": "Add a user to a local group.", "question": "What command adds a user to a local group in PowerShell?" },
                { "term": "Test-Connection", "explanation": "Ping a remote host to test network connectivity.", "question": "Which command pings a remote host in PowerShell?" },
                { "term": "Test-NetConnection", "explanation": "Test network connectivity and troubleshoot network issues.", "question": "How can you test network connectivity and troubleshoot issues using PowerShell?" },
                { "term": "Get-ItemProperty", "explanation": "Get values from the Windows Registry.", "question": "Which command retrieves values from the Windows Registry in PowerShell?" },
                { "term": "Set-ItemProperty", "explanation": "Set values in the Windows Registry.", "question": "How do you set values in the Windows Registry using PowerShell?" },
                { "term": "Get-Content", "explanation": "Read the content of files.", "question": "What command reads the content of a file in PowerShell?" },
                { "term": "Set-Content", "explanation": "Write content to files.", "question": "How do you write content to files in PowerShell?" },
                { "term": "Select-String", "explanation": "Search for text patterns in files.", "question": "Which command searches for text patterns in files in PowerShell?" },
                { "term": "Get-Package", "explanation": "List installed software packages.", "question": "How do you list installed software packages in PowerShell?" },
                { "term": "Install-Package", "explanation": "Install software packages.", "question": "What command installs software packages in PowerShell?" },
                { "term": "Uninstall-Package", "explanation": "Uninstall software packages.", "question": "Which command uninstalls software packages in PowerShell?" },
                { "term": "Get-Acl", "explanation": "Retrieve access control lists (ACLs) for files and directories.", "question": "How can you retrieve ACLs for files or directories in PowerShell?" },
                { "term": "Set-Acl", "explanation": "Set ACLs to manage permissions.", "question": "What command sets ACLs for files or directories in PowerShell?" },
                { "term": "Enter-PSSession", "explanation": "Start an interactive session on a remote computer.", "question": "How do you start an interactive session on a remote computer using PowerShell?" },
                { "term": "Invoke-Command", "explanation": "Run commands on remote computers.", "question": "Which command runs commands on remote computers in PowerShell?" },
                { "term": "Copy-Item -ToSession", "explanation": "Copy files to a remote session.", "question": "How do you copy files to a remote session in PowerShell?" },
                { "term": "Get-ChildItem Env", "explanation": "List environment variables.", "question": "Which command lists environment variables in PowerShell?" },
                { "term": "Set-Item Env", "explanation": "Set or modify environment variables.", "question": "What command sets or modifies environment variables in PowerShell?" }
            ],
        },

{
        topicName: "Azure PowerShell",
        entries: [
            // General
            { "term": "pwsh", "explanation": "Start PowerShell.", "question": "How do you start PowerShell?" },
            { "term": "nano MyScript.ps1", "explanation": "Create a PowerShell script.", "question": "How can you create a PowerShell script?" },
            { "term": "date", "explanation": "Get short date.", "question": "Which command shows the short date in PowerShell?" },
            { "term": "az version", "explanation": "Get AZ CLI version.", "question": "How do you check the version of Azure CLI?" },
            { "term": "az upgrade", "explanation": "Upgrade AZ CLI.", "question": "Which command upgrades Azure CLI?" },
            { "term": "az interactive", "explanation": "AZ CLI interactive mode (command declarations).", "question": "How do you start interactive mode in Azure CLI?" },
            { "term": "exit", "explanation": "Exit the interactive mode.", "question": "What command exits Azure CLI interactive mode?" },
            { "term": "az vm create", "explanation": "Create a virtual machine in Azure CLI.", "question": "How can you create a virtual machine using Azure CLI?" },
            { "term": "Login-AzAccount", "explanation": "Log in to your Azure account.", "question": "How do you log in to Azure using PowerShell?" },
            { "term": "Get-AzResourceGroup", "explanation": "List resource groups.", "question": "What command lists resource groups in Azure?" },
            { "term": "New-AzResourceGroup", "explanation": "Create a new resource group.", "question": "How do you create a new resource group in Azure?" },
            { "term": "Get-AzResource", "explanation": "List resources in a resource group or subscription.", "question": "Which command lists resources in a resource group in Azure?" },
            { "term": "New-AzResource", "explanation": "Create a new resource in a resource group.", "question": "How do you create a new resource in Azure?" },
            { "term": "Remove-AzResource", "explanation": "Delete a resource.", "question": "What command deletes a resource in Azure?" },
            { "term": "New-AzVM", "explanation": "Create a new virtual machine.", "question": "How do you create a virtual machine in Azure using PowerShell?" },
            { "term": "Start-AzVM", "explanation": "Start a virtual machine.", "question": "What command starts a virtual machine in Azure?" },
            { "term": "Stop-AzVM", "explanation": "Stop a virtual machine.", "question": "How do you stop a virtual machine in Azure using PowerShell?" },
            { "term": "Restart-AzVM", "explanation": "Restart a virtual machine.", "question": "Which command restarts a virtual machine in Azure?" },
            { "term": "Update-AzVM", "explanation": "Update the configuration of a virtual machine.", "question": "What command updates the configuration of a virtual machine in Azure?" },
            { "term": "New-AzStorageAccount", "explanation": "Create a new storage account.", "question": "How can you create a storage account in Azure?" },
            { "term": "Get-AzStorageAccount", "explanation": "List storage accounts.", "question": "What command lists storage accounts in Azure?" },
            { "term": "New-AzStorageContainer", "explanation": "Create a new storage container.", "question": "Which command creates a storage container in Azure?" },
            { "term": "Get-AzStorageContainer", "explanation": "List storage containers.", "question": "How do you list storage containers in Azure?" },
            { "term": "Set-AzStorageBlobContent", "explanation": "Upload a file to a storage container.", "question": "What command uploads a file to a storage container in Azure?" },
            { "term": "New-AzWebApp", "explanation": "Create a new Azure Web App.", "question": "How do you create a new Azure Web App?" },
            { "term": "Get-AzWebApp", "explanation": "List Azure Web Apps.", "question": "Which command lists Azure Web Apps?" },
            { "term": "Publish-AzWebApp", "explanation": "Deploy a local app to an Azure Web App.", "question": "How can you deploy a local app to an Azure Web App?" },
            { "term": "New-AzSqlServer", "explanation": "Create a new Azure SQL Server.", "question": "How do you create a new Azure SQL Server?" },
            { "term": "New-AzSqlDatabase", "explanation": "Create a new Azure SQL Database.", "question": "What command creates a new Azure SQL Database?" },
            { "term": "Get-AzSqlDatabase", "explanation": "List Azure SQL Databases.", "question": "How do you list Azure SQL Databases?" },
            { "term": "New-AzVirtualNetwork", "explanation": "Create a new virtual network.", "question": "How can you create a virtual network in Azure?" },
            { "term": "New-AzVirtualNetworkSubnetConfig", "explanation": "Create a subnet configuration.", "question": "Which command creates a subnet configuration in Azure?" },
            { "term": "Get-AzVirtualNetwork", "explanation": "List virtual networks.", "question": "How do you list virtual networks in Azure?" },
            { "term": "New-AzKeyVault", "explanation": "Create a new Azure Key Vault.", "question": "How can you create a Key Vault in Azure?" },
            { "term": "Get-AzKeyVault", "explanation": "List Azure Key Vaults.", "question": "Which command lists Azure Key Vaults?" },
            { "term": "Set-AzKeyVaultSecret", "explanation": "Set a secret in an Azure Key Vault.", "question": "How do you set a secret in Azure Key Vault?" },
            { "term": "New-AzADServicePrincipal", "explanation": "Create a new Azure Active Directory (AD) service principal.", "question": "What command creates a new Azure AD service principal?" },
            { "term": "Get-AzADServicePrincipal", "explanation": "List Azure AD service principals.", "question": "How do you list Azure AD service principals?" },
            { "term": "New-AzResourceLock", "explanation": "Create a new resource lock.", "question": "Which command creates a new resource lock in Azure?" },
            { "term": "Get-AzResourceLock", "explanation": "List resource locks.", "question": "How do you list resource locks in Azure?" },
            { "term": "Remove-AzResourceLock", "explanation": "Remove a resource lock.", "question": "What command removes a resource lock in Azure?" }
        ],
    },
    {
        topicName: "tmux Commands",
        entries: [
            { "term": "tmux", "explanation": "Start a new tmux session.", "question": "How do you start a new tmux session?" },
            { "term": "tmux new -s <session-name>", "explanation": "Start a new tmux session with a specific name.", "question": "How can you start a new tmux session with a custom name?" },
            { "term": "tmux ls", "explanation": "List all tmux sessions.", "question": "What command lists all active tmux sessions?" },
            { "term": "tmux attach -t <session-name>", "explanation": "Attach to a tmux session.", "question": "How do you attach to an existing tmux session?" },
            { "term": "Ctrl-b d", "explanation": "Detach from the current tmux session.", "question": "What keyboard shortcut detaches from the current tmux session?" },
            { "term": "tmux kill-session -t <session-name>", "explanation": "Kill a tmux session.", "question": "Which command kills a specific tmux session?" },
            { "term": "Ctrl-b $", "explanation": "Rename the current tmux session.", "question": "How do you rename the current tmux session?" },
            { "term": "Ctrl-b c", "explanation": "Create a new window in tmux.", "question": "What shortcut creates a new window in tmux?" },
            { "term": "Ctrl-b n", "explanation": "Switch to the next window.", "question": "How can you switch to the next window in tmux?" },
            { "term": "Ctrl-b p", "explanation": "Switch to the previous window.", "question": "Which shortcut switches to the previous window in tmux?" },
            { "term": "Ctrl-b <number>", "explanation": "Switch to a specific window by number.", "question": "How do you switch to a specific tmux window using its number?" },
            { "term": "Ctrl-b ,", "explanation": "Rename the current window.", "question": "What shortcut renames the current tmux window?" },
            { "term": "Ctrl-b %", "explanation": "Split the current pane horizontally.", "question": "How can you split the current tmux pane horizontally?" },
            { "term": "Ctrl-b \"", "explanation": "Split the current pane vertically.", "question": "What shortcut splits the current tmux pane vertically?" },
            { "term": "Ctrl-b o", "explanation": "Switch to the next pane.", "question": "How do you switch to the next pane in tmux?" },
            { "term": "Ctrl-b <arrow-keys>", "explanation": "Resize the current pane.", "question": "Which shortcut resizes the current tmux pane?" },
            { "term": "Ctrl-b x", "explanation": "Close the current pane.", "question": "How can you close the current tmux pane?" },
            { "term": "Ctrl-b : setw synchronize-panes on", "explanation": "Synchronize panes in tmux.", "question": "What command synchronizes all panes in tmux?" },
            { "term": "Ctrl-b [", "explanation": "Scroll up in the current pane.", "question": "How do you scroll up in a tmux pane?" },
            { "term": "q", "explanation": "Exit scroll mode in tmux.", "question": "Which key exits scroll mode in tmux?" },
            { "term": "tmux save-buffer <file-name>", "explanation": "Save a tmux session to a file.", "question": "How can you save a tmux session buffer to a file?" },
            { "term": "tmux source-file <file-name>", "explanation": "Restore a tmux session from a file.", "question": "What command restores a tmux session from a file?" },
            { "term": "tmux kill-server", "explanation": "Kill all tmux sessions.", "question": "How do you kill all tmux sessions at once?" }
        ],
    },
    {
        topicName: "Deno",
        entries: [
            { "term": "deno run <file>", "explanation": "Executes the specified script file (TypeScript or JavaScript).", "question": "What command executes a Deno script file?" },
            { "term": "deno test [options]", "explanation": "Runs test files with the .test.ts or .test.js extensions.", "question": "How do you run tests in Deno?" },
            { "term": "deno lint [files...]", "explanation": "Lints the specified files to enforce code quality and style.", "question": "What command lints files in Deno?" },
            { "term": "deno fmt [files...]", "explanation": "Formats files according to Deno's style guide.", "question": "How do you format files in Deno?" },
            { "term": "deno compile <file>", "explanation": "Compiles a script into a standalone executable.", "question": "What command compiles a Deno script into an executable?" },
            { "term": "deno run --allow-net <file>", "explanation": "Allows network access for the script.", "question": "What command allows network access for a Deno script?" },
            { "term": "deno run --allow-read <file>", "explanation": "Allows read access to the file system.", "question": "What command allows file system read access in Deno?" },
            { "term": "deno run --allow-write <file>", "explanation": "Allows write access to the file system.", "question": "What command allows file system write access in Deno?" },
            { "term": "deno run --allow-env <file>", "explanation": "Allows access to environment variables.", "question": "How do you allow environment variable access in Deno?" },
            { "term": "deno cache <file>", "explanation": "Downloads and caches all dependencies locally.", "question": "What command caches dependencies in Deno?" },
            { "term": "deno info [file]", "explanation": "Displays information about a script or the Deno cache.", "question": "How do you get information about a Deno script or cache?" },
            { "term": "deno install [options] <file>", "explanation": "Installs a script globally as an executable.", "question": "How do you install a Deno script globally?" },
            { "term": "deno doc [module]", "explanation": "Generates documentation for a module.", "question": "What command generates documentation for a Deno module?" },
            { "term": "deno upgrade", "explanation": "Upgrades Deno to the latest version.", "question": "What command upgrades Deno to the latest version?" },
            { "term": "deno help [command]", "explanation": "Displays help information for a specific command.", "question": "How do you get help for a specific Deno command?" }
        ],
    },
    */