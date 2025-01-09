class Stack:
    def __init__(self):
        self.items = []
    def additem(self,item):
        self.items.append(item)
    def removeitem(self):
        return self.items.pop()
    def peek(self):
        return self.items[-1]
    def is_empty(self):
        return len(self.items) == 0

# mypringles = Stack()
# mypringles.additem("anil")
# mypringles.additem("rita")
# mypringles.removeitem()
# print(mypringles.peek())

class Data:
    def __init__(self,value,next=None,previous=None):
        self.value = value
        self.next = next
        self.previous = previous ## This is to add previous link

class DoublyLinkedList: # DoublyLinkedList linked list because the nodes have reference to both forward and back
    def __init__(self):
        self.head = None
        self.tail = None

    def show_me_all_transactions(self): # O(n)
        current = self.head
        while(current != None):
            print(current.value)
            current = current.next

    def show_me_all_transactions_reverse(self): # O(n)
        current = self.tail
        while(current != None):
            print(current.value)
            current = current.previous

    def add_transaction(self,value): #O(n)   >> O(1)
        count = 1
        if(self.head == None):
            self.head = Data(value)
            self.tail = self.head
            return
        previous_tail = self.tail
        self.tail = Data(value)
        previous_tail.next = self.tail
        self.tail.previous = previous_tail

# mytransactionlinkedlist = DoublyLinkedList()
# mytransactionlinkedlist.add_transaction("Anil sent Rs 200 to Rita")
# mytransactionlinkedlist.add_transaction("Nayar sent Rs 300 to Qayyam")
# mytransactionlinkedlist.add_transaction("Nayar sent Rs 150 to Rita")
# mytransactionlinkedlist.add_transaction("Rita sent Rs 500 to Anil")
# mytransactionlinkedlist.add_transaction("Rita sent Rs 500 to Anil")
# mytransactionlinkedlist.add_transaction("Rita sent Rs 500 to Anil")
# mytransactionlinkedlist.add_transaction("Rita sent Rs 500 to Anil")
# mytransactionlinkedlist.add_transaction("Rita sent Rs 500 to Anil")
# mytransactionlinkedlist.add_transaction("Rita sent Rs 500 to Anil")
# mytransactionlinkedlist.add_transaction("Rita sent Rs 1000 to Anil")
# mytransactionlinkedlist.show_me_all_transactions()
# print("===========show_me_all_transactions_reverse")
# mytransactionlinkedlist.show_me_all_transactions_reverse()


mydict = {
    "apple" : "red",
    "strawberry" : "red",
    "orange" : "orange",
    "guava" : "yellow",
}

def mybucket(string):
    import hashlib
    return int(hashlib.sha1(string.encode("utf-8")).hexdigest(), 16) % (10 ** 2)


print(mydict['orange']) # O(n) O(1)


# print("apple",mybucket("apple"))
# print("strawberry",mybucket("strawberry"))
# print("orange",mybucket("orange"))
# print("guava",mybucket("guava"))

print(mybucket("mango"))