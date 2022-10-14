if __name__ == '__main__':
    all_students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        all_students.append([name, score])
    # all_students = sorted(all_students, key=lambda x: x[1], reverse=True) # Descending sorted by score
    # second_lowest_score = all_students[-2][1] # second_to_last element in list
    all_scores = []
    for student in all_students:
        if student[1] not in all_scores:
            all_scores.append(student[1])
    print(all_scores)
    sorted_scores = sorted(all_scores)
    second_lowest_score = all_scores[-2] # second_to_last element in list
    print(second_lowest_score)
    second_lowest_students = []
    for student in all_students:
        if student[1] == second_lowest_score:
            second_lowest_students.append(student[0])
    print(second_lowest_students)
    for student in sorted(second_lowest_students): # sort the names alphabetically
        print(student) # print each name on new line
    # sort the names alphabetically
    
