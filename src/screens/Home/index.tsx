import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { TaskCard } from '../../components/TaskCard'

import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'

interface TaskProps {
  text: string
  done: boolean
}

export function Home() {
  const [taskName, setTaskName] = useState<string>('')
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [tasksDoneCounter, setTasksDoneCounter] = useState<number>(0)

  function handleAddNewTask() {
    const isTaskTextExists = tasks.find((task) => task.text === taskName.trim())

    if (isTaskTextExists) {
      return Alert.alert(
        'Tarefa já registrada',
        'Já existe uma tarefa com esse nome',
      )
    }

    setTasks((prevState) => [
      {
        text: taskName.trim(),
        done: false,
      },
      ...prevState,
    ])
    setTaskName('')
  }

  function handleSetTaskDone(index: number) {
    const tasksUpdated = tasks.map((t, i) => {
      if (index === i) {
        t.done = !t.done
      }

      return t
    })

    if (tasksUpdated[index].done) {
      setTasksDoneCounter((prevState) => prevState + 1)
    } else {
      setTasksDoneCounter((prevState) => prevState - 1)
    }

    setTasks(tasksUpdated)
  }

  function handleRemoveTask(task: TaskProps) {
    Alert.alert('Remover tarefa', 'Tem certeza que deseja remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          const tasksWithoutTheDeletedOne = tasks.filter(
            (t) => t.text !== task.text,
          )

          if (task.done) {
            setTasksDoneCounter((prevState) => prevState - 1)
          }

          setTasks(tasksWithoutTheDeletedOne)
        },
      },
      {
        text: 'Não',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
          alt=""
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity
          style={styles.addButton}
          disabled={!taskName.trim()}
          onPress={handleAddNewTask}
        >
          <Ionicons name="add-circle-outline" color="#F2F2F2" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.summary}>
        <View style={styles.taskInfo}>
          <Text style={styles.taskCreatedText}>Criadas</Text>
          <Text style={styles.counterText}>{tasks.length}</Text>
        </View>

        <View style={styles.taskInfo}>
          <Text style={styles.taskDoneText}>Concluídas</Text>
          <Text style={styles.counterText}>{tasksDoneCounter}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, i) => String(i)}
        renderItem={({ item, index }) => (
          <TaskCard
            text={item.text}
            done={item.done}
            onDone={() => handleSetTaskDone(index)}
            onRemove={() => handleRemoveTask(item)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.containerEmpty}>
            <Ionicons name="document-text-outline" size={80} color="#333333" />
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={{ color: '#808080', fontSize: 16 }}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        }
      />
    </View>
  )
}
