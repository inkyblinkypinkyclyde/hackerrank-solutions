if __name__ == '__main__':
    all_students = []
    all_scores = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        all_students.append([name, score])
        if score not in all_scores:
            all_scores.append(score)
    sorted_scores = all_scores.sort()
    second_lowest_students = []
    for student in all_students:
        if student[1] == all_scores[1]:
            second_lowest_students.append(student[0])
    for student in sorted(second_lowest_students):
        print(student)
    
