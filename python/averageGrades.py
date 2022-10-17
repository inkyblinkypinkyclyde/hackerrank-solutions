if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    for mark in student_marks:
        if mark == query_name:
            total = float(sum(student_marks[mark]))
            num = len(student_marks[mark])
            average=round(total/num, 2)
            print('%.2f' % average)